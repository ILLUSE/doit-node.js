// 파이프 연습하기 (결과 비교 파일 : 03\results\pipe.js)
const fs = require("fs");

const readStream = fs.createReadStream("./readMe.txt","utf8");
const writeStream = fs.createWriteStream("./writePipe.txt");

readStream.pipe(writeStream); //pipe를 사용하면 바로 리더블 스트림의 내용을 라이터블 스트림에 전달
