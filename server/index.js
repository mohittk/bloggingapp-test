const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const userRoutes = require('./routes/userRoutes')

require('dotenv').config();

app.use(cors());
app.use(express.json());

const DB = process.env.DATABASE;
mongoose.connect(DB)
.then(()=> {
    console.log('Database connected');
}).catch((err)=> {
    console.log(err);
    console.log('Database error')
})

app.use('/api/user', userRoutes);


if(process.env.NODE_ENV==='production'){
    app.use(express.static("client/build"));
    const path=require("path");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

app.listen(port, () => {
    console.log('The server is running at port 5000');
})
