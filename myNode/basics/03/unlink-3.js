// 비동기로 파일 삭제하기 - unlink 함수 (결과 비교 파일 : 03\results\unlink-3.js)
const fs = require("fs");

if(!fs.existsSync("./myfile.txt")){
    console.log("file dose not exist");
}
else{
    fs.unlink("./myfile.txt",() => {
        console.log("file deleted");
    });
}

// 요즘 스타일
// const fs = require("fs").promises;

// async function checkAndDeleteFile() {
//     try {
//         // 파일 존재 여부 확인
//         await fs.access("./text-2.txt");
//         console.log("File exists. Deleting now...");
        
//         // 파일 삭제
//         await fs.unlink("./text-2.txt");
//         console.log("File deleted.");
//     } catch (error) {
//         // 파일이 존재하지 않으면 에러 처리
//         if (error.code === "ENOENT") {
//             console.log("File does not exist.");
//         } else {
//             console.error("An error occurred:", error);
//         }
//     }
// }

// // 함수 호출
// checkAndDeleteFile();
