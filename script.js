function GetQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
    var context = ""; 
    if (r != null) 
         context = r[2]; 
    reg = null; 
    r = null; 
    return context == null || context == "" || context == "undefined" ? "" : context; 
}

function CreateFile() {
const data ='driveId=0&etag=d41d8cd98f00b204e9800998ecf8427e&fileName=6.txt&parentFileId=0&size=0&type=0';

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    //console.log(this.responseText);
    alert(JSON.parse((this.responseText));
  }
});

xhr.open('POST', 'https://www.123pan.com/b/api/file/upload_request');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjIwOTM1MTgsImlhdCI6MTcyMTQ4ODcxOCwiaWQiOjE4MzczNzg4NTcsIm1haWwiOiIiLCJuaWNrbmFtZSI6IjE4OTcyOTA4NjE3Iiwic3VwcGVyIjpmYWxzZSwidXNlcm5hbWUiOjE4OTcyOTA4NjE3LCJ2IjowfQ.S3ICfokc-JGbr-8cil_onQhe6mUNBJtKHsRX3_i2ZTs');
xhr.setRequestHeader('Platform', 'open_platform');
xhr.setRequestHeader('app-version', '3');


xhr.send(data);
}