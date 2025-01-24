// 빈 디렉터리 삭제하기 - rmdir 함수 (결과 비교 파일 : 03\results\dir-3.js)
const fs = require("fs");

if(fs.existsSync("./test")){ //만약 test 폴더가 존재하면
    fs.rmdir("./test",(err) => {  //test 폴더 삭제
        if(err){ //에러 처리
            console.error(err);
        }
        else { 
            console.log("folder deleted");
        }
    });
}
else { //만약 test 폴더가 존재하지 않으면
    console.log("folder does not exist");
}
