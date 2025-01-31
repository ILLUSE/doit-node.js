// async ... awiat 연습하기  (결과 비교 파일 : 05\results\await.js)
const fs = require("fs").promises;

async function readDirAsync(){
    try {
        const files = await fs.readdir("./"); //readdir 이 끝날떄까지 기다린 후 files에 저장
        console.log(files);
    } catch{
        console.error(err); //만약 오류 발생 시 처리
    }
}

readDirAsync();