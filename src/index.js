const express=require('express')
const cors=require('cors')
const app=express()
const port=3000


//middleware
app.use(express.json())
app.use(cors())








app.listen(port, ()=>{
    console.log(`servidor online em localhost:${port}`);
})
