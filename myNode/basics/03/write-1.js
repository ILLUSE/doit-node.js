// 동기로 파일 기록하기 - writeFileSync 함수 (결과 비교 파일은 03\results\write-1.js)
const fs = require("fs"); //fs 모듈 가져오기

const data = fs.readFileSync("./example.txt","utf8"); //data에 example.txt 인코딩하여 저장
fs.writeFileSync("./text-1.txt",data); //text-1.txt에 data에 저장된 내용 작성