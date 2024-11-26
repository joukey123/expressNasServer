const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// 제품 정보가 저장될 JSON 파일 경로
app.get("/", (req, res) => {
  res.send("Express 서버가 정상적으로 작동 중입니다!");
});
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});
