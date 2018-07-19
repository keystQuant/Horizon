// start soul server on Soul Server in a Docker container
const express = require('express');
const axios = require('axios');

const app = express();

const bodyParser = require('body-parser');

// 아래 부분을 지우면 몽고DB 사용 없이 외부 API 연결 작업을 한다
const mongoose = require('mongoose');

const Test = require('./src/models/test');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('assets')); // CSS 파일 연결

app.set('views', `${__dirname}/templates`); // HTML 파일 연결
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


const server = app.listen(8080, () => {
  console.log('포트 8080에 서버 시작합니다.');
});

const stopServer = () => {
  server.close(); // 위에서 시작한 새로운 서버를 닫아준다
  // 테스트할 때 필요한 툴 (프로덕션 상에서는 상관없음)
};

// [ CONFIGURE mongoose ]

// CONNECT TO MONGODB SERVER
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
  // CONNECTED TO MONGODB SERVER
  console.log('몽고DB 연결하였습니다.');
});

// connect to localhost if not in Docker container
const mongoURL = process.env.ENVIRONMENT === 'docker'
  ? 'mongodb://horizonadmin:makeitpopwe123HORIZON@mongo:27017/horizon?authSource=admin' // ENVIRONMENT 환경변수가 도커면 도커 컨테이너로 연결
  : 'mongodb://horizonadmin:makeitpopwe123HORIZON@localhost:27017/horizon?authSource=admin'; // 그렇지 않다면 개발 환경 (로컬로 연결)
mongoose.connect(mongoURL);

// //////////////////////// -->>> API HERE
// TEST API
app.get('/', (req, res) => {
  res.send('서버가 제대로 작동합니다!');
});

app.post('/api/test', (req, res) => {
  // POST할 때 받은 데이터값을 몽고디비로 보내서 저장한다
  // 저장에 성공하면 result가 1, 실패하면 0이다
  const testInst = new Test();
  testInst.author = req.body.author; // author와 content를 post data로 받음
  testInst.content = req.body.content;

  testInst.save((error) => {
    if (error) {
      console.log(error);
      res.json({ result: 0 });
    }

    res.json({ result: 1 });
  });
});


// //////////////////////// //
// // URL 정의는 여기서 부터 // //
// /////////////////////// //

// 여기부터는 프론트엔드 개발자의 창의력을 보여주세요~! //

// Horizon 홈 페이지
app.get('/home', (req, res) => {
  res.render('home.html');
});
