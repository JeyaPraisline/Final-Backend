const express=require('express');
const app=express();
const mongoose=require('mongoose');
const routerurl=require('./routes/routes');  //router.js signupmodel
const cors=require('cors');

app.use(express.json());
app.use(cors())

app.use("/app",routerurl);
if(mongoose.connect('mongodb+srv://jeyapraisline:Jeyapraise24@cluster0.wlyyzwg.mongodb.net/hospitaldb?retryWrites=true&w=majority&appName=Cluster0'))
{
    console.log('Database is connected');
}

app.listen(4000,()=>
{
    console.log('server is connected');
})