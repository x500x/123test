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
const data = 'driveId=0&etag=d41d8cd98f00b204e9800998ecf8427e&fileName=txt&parentFileId=0&size=0&type=0';

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    document.write(this.responseText);
  }
});

xhr.open('POST', 'https://www.123pan.com/b/api/file/upload_request');
xhr.setRequestHeader('User-Agent', 'Reqable/2.20.2');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjI0ODg3MTksImlhdCI6MTcyMTg4MzkxOSwiaWQiOjE4MzczNzg4NTcsIm1haWwiOiIiLCJuaWNrbmFtZSI6IjE4OTcyOTA4NjE3Iiwic3VwcGVyIjpmYWxzZSwidXNlcm5hbWUiOjE4OTcyOTA4NjE3LCJ2IjowfQ.v5F4GY_nKvasmr9HbGPCgyX8mxhgvu9aNgSi6a04Ygg');
xhr.setRequestHeader('Platform', 'open_platform');
xhr.setRequestHeader('app-version', '3');
xhr.setRequestHeader('Cookie', 'aliyungf_tc=1e32b8f370d1df293501ad648eb46c1f2420a4342346b260fc1338ecd40624c4');

xhr.send(data);
}