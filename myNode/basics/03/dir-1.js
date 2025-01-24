// 디렉터리 만들기 - mkdir 함수 (결과 비교 파일 : 03\results\dir-1.js)
const fs = require("fs");

if(fs.existsSync("./test")){
    console.log("folder already exist");
}
else {
    fs.mkdir("./test",(err)=>{
        if(err){
            console.error(err);
        }
        console.log("folder created");
    });
};

// 요즘 스타일
// const fs = require("fs").promises;

// async function checkAndCreateFolder() {
//     try {
//         // 폴더 존재 여부 확인
//         await fs.access("./test");
//         console.log("Folder already exists.");
//     } catch (err) {
//         if (err.code === "ENOENT") { //ENOENT : 파일이나 폴더 찾을수 없을때 에러코드
//             // 폴더가 없으면 생성
//             await fs.mkdir("./test");
//             console.log("Folder created.");
//         } else {
//             // 다른 에러 처리
//             console.error("An error occurred:", err);
//         }
//     }
// }

// // 함수 실행
// checkAndCreateFolder();
