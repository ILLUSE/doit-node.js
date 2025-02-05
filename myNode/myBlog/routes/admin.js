//관리자 화면과 관련된 라우트 코드
const express = require("express");
const router = express.Router();
const adminLayout = "../views/layouts/admin"; //레이아웃 가져오기
const adminLayout2 = "../views/layouts/admin-nologout"; //관리자 로그아웃 사라짐 , but 레이아웃 이상함 수정 필요
const asyncHandler = require("express-async-handler"); // try/catch 대신 사용하기 위해

/**
 * GET /admin
 * Admin page
 */
router.get("/admin",(req,res) => {
    const locals = {
        title: "관리자 페이지", // 브라우저 탭에 표시할 내용
    };

    //adminLayout을 사용해서 admin/index.ejs 렌더링하기
    res.render("admin/index", {locals, layout: adminLayout2})
});

router.post(
    "/admin",
    asyncHandler(async(req,res) => {
        const {username,password} = req.body;

        if (username === "admin" && password === "admin"){
            res.send("Success");
        }
        else{
            res.send("Fail");
        }
    })
);

module.exports = router;

