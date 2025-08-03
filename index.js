const express = require("express");
require("dotenv").config();

const cors = require("cors");

const app = express();
const port = 8080;

const userRouter = require("./routes/user");

app.use(cors());

// json 파싱 미들웨어
app.use(express.json());

// 라우터 적용
app.use("/user", userRouter);

// 실행
app.listen(port, () => {
  console.log(`${port} 서버 실행`);
});
