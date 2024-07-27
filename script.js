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
const data = 'driveId=0&etag=d41d8cd98f00b204e9800998ecf8427e&fileName=txt&parentFileId=0&size=0&type=0';

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener('readystatechange', function () {
  if (xhr.readyState === this.DONE) {
    document.write(xhr.responseText);
  }
});

xhr.open('POST', 'https://www.123pan.com/b/api/file/upload_request');
xhr.setRequestHeader('User-Agent', 'Mozilla/5.0 (Linux; Android 12; JLH-AN00 Build/HONORJLH-AN00) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.105 Mobile Safari/537.36');
xhr.setRequestHeader('Host', 'www.123pan.com');
xhr.setRequestHeader('Connection', 'keep-alive');
xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjI2OTU5NzYsImlhdCI6MTcyMjA5MTE3NiwiaWQiOjE4MzczNzg4NTcsIm1haWwiOiIiLCJuaWNrbmFtZSI6IjE4OTcyOTA4NjE3Iiwic3VwcGVyIjpmYWxzZSwidXNlcm5hbWUiOjE4OTcyOTA4NjE3LCJ2IjowfQ.zu5p_eJKj9vrcCYSYLuMB0Ei2v-bWbTtnFwgRHk_4Ps');
xhr.setRequestHeader('LoginUuid', 'edf2d4acef7d7d559e10c12d5b5baaa70fdd6b27fb22af35e48c1aa6b4b778bda1647c17962d60e792e4926a08c9dcf0');
xhr.setRequestHeader('App-Version', '3');
xhr.setRequestHeader('platform', 'web');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.setRequestHeader('Accept', '*/*');
xhr.setRequestHeader('Origin', 'https://www.123pan.com');
xhr.setRequestHeader('X-Requested-With', 'mark.vib');
xhr.setRequestHeader('Sec-Fetch-Site', 'same-origin');
xhr.setRequestHeader('Sec-Fetch-Mode', 'cors');
xhr.setRequestHeader('Sec-Fetch-Dest', 'empty');
xhr.setRequestHeader('Referer', 'https://www.123pan.com/');
xhr.setRequestHeader('Accept-Encoding', 'gzip, deflate');
xhr.setRequestHeader('Accept-Language', 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7');
xhr.setRequestHeader('Cookie', 'Hm_lvt_d815f2e1f682c86565c1063aafaef292=1721494057; HMACCOUNT=D5C5B4DFD486FBD1; cna=6c736274a938499f9a22ec7a25ffe055; aliyungf_tc=be5d7b33283b50eadba02875656bbd5cbe2791af6882982c807a6bf392706adc; UM_distinctid=190d2dae94a390-044b61809c0edd-36747216-45f60-190d2dae94b326; Hm_lpvt_d815f2e1f682c86565c1063aafaef292=1722093588; CNZZDATA1280304515=1256002701-1721524480-%7C1722093594');

xhr.send(data);
document.write(data);
}