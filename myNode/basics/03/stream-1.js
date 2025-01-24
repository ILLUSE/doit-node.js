// 리더블 스트림 연습하기 (결과 비교 파일 : 03\results\stream-1.js)
const fs = require("fs");

const readStream = fs.createReadStream("./readMe.txt"); //readStream 에 readMe 파일의 데이터 streaming

readStream.on("data",(chunk) => { //데이터를 읽을수 있을 때마다 버퍼 크기만큼 가져와 출력
    console.log("New chunk received: ");
    console.log(chunk);
});

readStream.on("end",() => {  // 데이터 다 읽으면
    console.log("finished reading data: ");
});

readStream.on("error",(err) => { //에러 발생 하면
    console.log(`Error reading the file: ${err}`);
});