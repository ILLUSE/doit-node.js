// 라이터블 스트림 연습하기 (결과 비교 파일 : 03\results\stream-2.js)
const fs = require("fs");

const readStream = fs.createReadStream("./readMe.txt","utf8"); //readStream 에 readMe 인코딩하여 스트리밍
const writeStream = fs.createWriteStream("./writeMe.txt"); //writeME에 chunk 단위로 작성

readStream.on("data",(chunk) => {
    console.log("New chunk Received: ");
    writeStream.write(chunk);
});
