// fs 모듈 readFileSync 함수의 인코딩 옵션 연습하기 ( 결과 비교 파일 : 03\results\read-2.js)
// 동기 처리
const fs = require("fs"); //fs 모듈 가져오기

const data = fs.readFileSync("./example.txt","utf8"); //txt파일 읽어서 data에 저장 후 출력(인코딩한 결과)
console.log(data);
