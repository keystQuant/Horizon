// start soul server on Soul Server in a Docker container
const express = require('express');
const axios = require('axios');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('assets')); // CSS 파일 연결

app.set('views', `${__dirname}/templates`); // HTML 파일 연결
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


const server = app.listen(7777, () => {
  console.log('포트 7777에서 서버 시작합니다.');
});

const stopServer = () => {
  server.close(); // 위에서 시작한 새로운 서버를 닫아준다
  // 테스트할 때 필요한 툴 (프로덕션 상에서는 상관없음)
};

// //////////////////////// //
// // URL 정의는 여기서 부터 // //
// /////////////////////// //

// 여기부터는 프론트엔드 개발자의 창의력을 보여주세요~! //

// Horizon 홈 페이지
app.get('/', (req, res) => {
  res.render('home.html');
});
