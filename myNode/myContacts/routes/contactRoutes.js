
const express = require("express");
const router = express.Router();

router
  .route("/contacts")
  .get((req, res) => {
    // 모든 연락처 가져오기
    res.status(200).send("Contacts Page");
  })
  .post((req, res) => {
    // 새 연락처 추가하기
    res.status(201).send("Create Contacts");
  });

router
  .route("/contacts/:id")
  .get((req, res) => {
    // 연락처 상세보기
    res.status(200).send(`View Contact for ID: ${req.params.id}`);
  })
  .put((req, res) => {
    // 연락처 수정하기
    res.status(200).send(`Update Contact for ID: ${req.params.id}`);
  })
  .delete((req, res) => {
    // 연락처 삭제하기
    res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
  });

  //현재 파일에서 router 객체를 외부에서 사용할 수 있도록 내보내는 역할
  module.exports = router;