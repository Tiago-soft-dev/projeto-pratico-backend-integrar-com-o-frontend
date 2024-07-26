require('dotenv').config()
const express=require('express')
const {connectToDatabase} = require('./database/database.connect')
const cors=require('cors')
require('express-async-errors')
const {ObjectId}=require('mongodb')
const tarefaRouter = require('./tarefa/tarefa.router')
const app=express()
const port=3000

async function main(){
    await connectToDatabase()
    //middleware
    app.use(express.json())
    app.use(cors())
    app.use('/tarefa', tarefaRouter)


    
    
    
    
    
    
    //tratamento de erro de rota. deve ser colocado após todos endpoints
    app.use('*', (req,res)=>{res.status(404).send({error: 'endpoint não encontrado'})})
    app.listen(port, ()=>{
        console.log(`servidor online em localhost:${port}`);
    })    
}
main()







