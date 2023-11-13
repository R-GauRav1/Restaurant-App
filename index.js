const express = require('express');
const app = express();
const webb = require('./routers/route.js');
let cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use('/',webb);

app.listen('3001',()=>{
    console.log("App Is Listening to port 3001");
})