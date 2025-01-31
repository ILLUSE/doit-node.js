// 블로킹 I/O  (결과 비교 파일 : 05\results\blocking-1.js)
const fs = require("fs");

const data = fs.readFileSync("example.txt"); //블로킹
console.log(data); //파일 읽기가 끝날때까지 대기
console.log("코드 끝!"); //파일을 읽고 내용을 표시할 떄까지 대기