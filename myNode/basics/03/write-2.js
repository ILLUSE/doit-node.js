// 동기로 파일 기록하기 - existsSync 함수, writeFileSync 함수 (결과 비교 파일은 03\results\write-2.js)
const fs = require("fs"); //fs 모듈 가져오기

const data = fs.readFileSync("example.txt","utf8"); // data에 파일 읽어 저장

if(fs.existsSync("text-1.txt")){ //만약 text-1.txt라는 파일이 이미 있다면 true, 없음 false
    console.log("file already exist"); //있다면 있다고 출력
} else {
    fs.writeFileSync("text-1.txt",data); //없으면 파일 만들고 data에 있는 내용 작성
}

