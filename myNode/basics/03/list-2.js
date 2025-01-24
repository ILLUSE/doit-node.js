// fs 모듈의 readdir 함수 연습하기 ( 결과 비교 파일 : 03\results\list-2.js)
// 비동기 처리
const fs = require("fs"); //fs 모듈 가져오기

fs.readdir("./",(err,files) => {  // 경로 , 콜백함수 인자들
    if(err){
        console.err(err);
    }
    console.log(files);
});