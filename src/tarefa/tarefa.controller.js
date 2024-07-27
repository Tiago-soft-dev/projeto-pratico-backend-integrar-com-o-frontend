const tarefaService = require('./tarefa.service')
const tarefa = require('./tarefa.entity')

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
    const {error , value: novaTarefa } = tarefa.validate(req.body)
       
        if(error){
            return res.status(400).send({error: error.details[0].message})
        }

    await tarefaService.create(novaTarefa)
    res.send('tarefa criada')
}

async function updateById(req,res){
    const id = req.params.id
    const {error , value: tarefaUpdate} = tarefa.validate(req.body)

        if(error){
            return res.status(400).send({error: error.details[0].message})
        }
        
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