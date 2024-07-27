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
/*
function CreateFile() {
const data = 'driveId=0&etag=d41d8cd98f00b204e9800998ecf8427e&fileName=txt&parentFileId=0&size=0&type=0';

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener('readystatechange', function () {
  if (xhr.readyState === this.DONE) {
    document.write(xhr.responseText);
  }
});

xhr.open('POST', 'https://www.123pan.com/b/api/file/upload_request',true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjI0ODg3MTksImlhdCI6MTcyMTg4MzkxOSwiaWQiOjE4MzczNzg4NTcsIm1haWwiOiIiLCJuaWNrbmFtZSI6IjE4OTcyOTA4NjE3Iiwic3VwcGVyIjpmYWxzZSwidXNlcm5hbWUiOjE4OTcyOTA4NjE3LCJ2IjowfQ.v5F4GY_nKvasmr9HbGPCgyX8mxhgvu9aNgSi6a04Ygg');
xhr.setRequestHeader('Platform', 'open_platform');
xhr.setRequestHeader('app-version', '3');

xhr.send(data);
document.write('done');
}
*/

function CreateFile() {
const headers = new Headers();
headers.append('User-Agent', 'Mozilla/5.0 (Linux; Android 12; JLH-AN00 Build/HONORJLH-AN00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.105 Mobile Safari/537.36');
headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjI2OTU5NzYsImlhdCI6MTcyMjA5MTE3NiwiaWQiOjE4MzczNzg4NTcsIm1haWwiOiIiLCJuaWNrbmFtZSI6IjE4OTcyOTA4NjE3Iiwic3VwcGVyIjpmYWxzZSwidXNlcm5hbWUiOjE4OTcyOTA4NjE3LCJ2IjowfQ.zu5p_eJKj9vrcCYSYLuMB0Ei2v-bWbTtnFwgRHk_4Ps');
headers.append('LoginUuid', 'edf2d4acef7d7d559e10c12d5b5baaa70fdd6b27fb22af35e48c1aa6b4b778bda1647c17962d60e792e4926a08c9dcf0');
headers.append('App-Version', '3');
headers.append('platform', 'web');
headers.append('Content-Type', 'application/x-www-form-urlencoded');
headers.append('Accept', '*/*');
headers.append('Origin', 'https://www.123pan.com');

const data = new URLSearchParams();
data.append('driveId', '0');
data.append('etag', 'd41d8cd98f00b204e9800998ecf8427e');
data.append('fileName', 'txt');
data.append('parentFileId', '0');
data.append('size', '0');
data.append('type', '0');

const options = {
  method: 'POST',
  headers: headers,
  body: data
};

fetch('https://www.123pan.com/b/api/file/upload_request', options)
  .then(response => response.text())
  .then(result => document.write(result))
  .catch(error => alart('error', error));
//document.write();
}