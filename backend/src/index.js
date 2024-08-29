const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const http = require('http');
const server = http.createServer(app);
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'.env'});
const port = 4000;
const setupSocket = require('./utils/socket');

app.use(express.static(path.join(__dirname, 'uploads' ))); //절대경로를 사용하기 위함임, 실행명령을 입력하는 경로에 따라서 상대적인 경로가 지정되어 버리니까?
app.use(cors());
app.use(express.json());
app.use('/users', require('./routes/users'));
app.use('/devices', require('./routes/devices'));

// const mongoURI = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_ADDR}/${process.env.MONGO_DBNAME}`
const mongoURI = `mongodb://${process.env.MONGO_ADDR}`

setupSocket(server);

mongoose.connect(mongoURI)
    .then(()=>{
        console.log('DB Connect!');
    })
    .catch(err=>{
        console.log(`DB connect error: ${err}`)
    })



app.get('/', (req, res) => {
    throw new Error("에러 테스트");
    res.send('Hello, world!!!');
})

//에러처리기 정의
//라우터에서 next를 이용하지 않으면 비동기 요청으로 인한 에러를 처리기에서 받지 못해서 서버가 crash 돼버린다.
app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.send(error.message || 'Here is index.js Error Handler');
})


server.listen(port, ()=>{
    console.log('server running on port 4000')
})