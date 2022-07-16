const express = require('express')
const Headlines = require('./routes/details')
const Fitness = require('./routes/fitness')
const Food = require('./routes/food')
const Technology = require('./routes/technology')
const Tourism = require('./routes/tourism')
// const detailsRouter2 = require('./route/bolywood')
const cors = require("cors")
const app = express()

app.use(cors())
// app.use('/',function(req,res){
//      res.send('function is running')
//  })
app.use("/api",Headlines)
app.use("/api",Fitness)
app.use("/api",Food)
app.use("/api",Technology)
app.use("/api",Tourism)
// app.use("/api",detalisRouter2)

app.listen(process.env.PORT||8000,()=>{
    console.log("app is running");
})