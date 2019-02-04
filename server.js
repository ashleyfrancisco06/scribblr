const express = require('express');
const app = express()
//  const { } = require(./models);
 const PORT = process.env.PORT || 3000
 const bodyParser = require('body-parser');

 app.use (bodyParser.json());

 app.get ('/', (req,res) =>{
     try{
        res.json('HELLO WORLD')
     }catch(e){
        res.status(404).json({
            message : e.message
        })
     }
 })

 app.listen(PORT, ()=> console.log(`Example app listening on ${PORT}`))
