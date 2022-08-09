const express = require('express');
const fs=require('fs');
const cors= require('cors');
const _= require('lodash');

const {v4: uuid}=require("uuid");

const app=express();
app.use(express.json());
app.use(express.cors());

app.get('/outfit',(req,res)=>{
    const shirts=["white","blue"];
    const pants=["grey","black"];
    const shoes=["blue","white"];

    res.json({
        shirt:_.sample(shirts),
        pant:_.sample(pants),
        shoe:_sample(shoes)
    })
})

🛍️

