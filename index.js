const express = require ('express');
const http = require ('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');
const hostname ='localhost';
const port = 2000;


const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/dishes',dishRouter);
app.use('/dishes/:dishId',dishRouter);
app.use('/promotions',promRouter);
app.use('/promotions/:promoId',promRouter);
app.use('/leaders',leaderRouter);
app.use('/leaders/:leaderId',leaderRouter);
app.use(express.static(__dirname+'/public'));
app.use((req,res,next)=>{
    
    res.statusCode =200;
    res.setHeader('content-type','text/html');
    res.end('<html><body><h1>Will send all the dishes to you!</h1></body></html>');
});
const server = http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);

});
