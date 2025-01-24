// fs 모듈의 readFile 함수 연습하기 (결과 비교 파일은 03\results\read-3.js)
// 비동기 처리
const fs = require("fs");

fs.readFile("./example.txt","utf8",(err,data)=> {

    if(err){
        console.errr(err);
    }
    console.log(data);
});