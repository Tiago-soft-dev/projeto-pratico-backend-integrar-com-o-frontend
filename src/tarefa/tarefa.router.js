const express=require('express')
const router = express.Router()
const tarefaController = require('./tarefa.controller')



router.get('/', tarefaController.readAll)
router.get('/:id', tarefaController.readById)
router.post('/', tarefaController.create)
router.put('/:id', tarefaController.updateById)
router.delete('/:id', tarefaController.deleteById)


module.exports = router