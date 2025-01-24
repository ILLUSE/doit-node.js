// fs 모듈의 readdirSync 함수 연습하기 ( 결과 비교 파일 : 03\results\list-1.js)
// 동기 처리
const fs = require("fs"); //fs 모듈 가져오기

let files = fs.readdirSync("./"); //files 에 파일 이름들 저장 후 출력
console.log(files);