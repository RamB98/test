const express= require('express')
const app =express();
var PORT=process.env.PORT||3000
app.listen(PORT)



app.get('/', (req,res)=>{


    res.send("<h2>Hello World!!!!</h2>")



})


router.get('/users', function(req, res, next) {
    res.send('respond with a resource');
  });