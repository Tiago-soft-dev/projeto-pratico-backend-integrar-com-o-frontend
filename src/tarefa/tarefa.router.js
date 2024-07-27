const express=require('express')
const router = express.Router()
const tarefaController = require('./tarefa.controller')
const { validateObjectId } = require('../database/database.helpers')



router.get('/', tarefaController.readAll)
router.get('/:id', validateObjectId,  tarefaController.readById)
router.post('/', tarefaController.create)
router.put('/:id', validateObjectId, tarefaController.updateById)
router.delete('/:id', validateObjectId, tarefaController.deleteById)


module.exports = router