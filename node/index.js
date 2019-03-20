import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import routes from './src/router/noderouter'


const app = express();
const PORT = 3000;

//mongoose connection

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/infodb',{
    useMongoClient: true
});

//setup bodyparser

app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());


routes(app);

app.get('/',(req,res)=>{
    res.send(`node and express server is running on ${PORT} `);
});

app.listen(PORT,()=>{
    console.log("runing")
});