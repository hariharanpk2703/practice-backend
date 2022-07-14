const express = require('express')
const detailsRouter1 = require('./routes/details')
// const detailsRouter2 = require('./route/bolywood')
const cors = require("cors")
const app = express()

app.use(cors())
// app.use('/',function(req,res){
//      res.send('function is running')
//  })
app.use("/api",detailsRouter1)
// app.use("/api",detalisRouter2)

app.listen(process.env.PORT||8000,()=>{
    console.log("app is running");
})