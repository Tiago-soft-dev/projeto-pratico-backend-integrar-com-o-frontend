const tarefaService = require('./tarefa.service')

async function readAll(req,res){
 const tarefas = await tarefaService.readAll()
 res.send(tarefas)
}

async function readById(req,res){
    const id = req.params.id
    const tarefa = await tarefaService.readById(id)
    res.send(tarefa)
}

async function create(req,res){
    const novaTarefa = req.body
    await tarefaService.create(novaTarefa)
    res.send('tarefa criada')
}

async function updateById(req,res){
    const id = req.params.id
    const tarefaUpdate = req.body
    await tarefaService.update(id,tarefaUpdate)
    res.send('item atualizado')
}

async function deleteById(req,res){
    const id = req.params.id
    await tarefaService.deleteById(id)
    res.send('item deletado')
}
module.exports = {
    readAll,
    readById,
    create,
    updateById,
    deleteById
}