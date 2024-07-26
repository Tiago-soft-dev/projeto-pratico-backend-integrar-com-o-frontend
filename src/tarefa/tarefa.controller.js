const tarefaService = require('./tarefa.service')

async function readAll(req,res){
 const tarefa = await tarefaService.readAll()
 res.send(tarefa)
}

module.exports = {
    readAll
}