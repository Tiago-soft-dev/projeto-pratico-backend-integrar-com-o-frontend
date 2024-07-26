const express=require('express')
const router = express.Router()
const tarefaController = require('./tarefa.controller')

function teste(req,res){
    res.send({message: 'teste de endpoint'})
}

router.get('/', tarefaController.readAll)
router.get('/:id', teste)
router.post('/', teste)
router.put('/:id', teste)
router.delete('/:id', teste)


module.exports = router