// fs 모듈의 readFileSync 함수 연습하기 ( 결과 비교 파일 : 03\results\read-1.js)
// 동기 처리
const fs = require("fs"); //fs 모듈 가져오기

const data = fs.readFileSync("./example.txt"); //txt파일 읽어서 data에 저장 후 출력(바이너리 자료)
console.log(data);