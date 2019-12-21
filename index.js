const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send({Hey:"Welcome to fullStack Development..."});
})

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is up on port ${PORT}`);
});