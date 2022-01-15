const express= require('express')
const app =express();

app.listen(3000)



app.get('/', (req,res)=>{


    res.send("<h2>Test app deployement</h2>")



})
