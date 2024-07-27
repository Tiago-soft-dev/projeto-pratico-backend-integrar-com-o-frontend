const { ObjectId } = require("mongodb")
const { getDatabase } = require("../database/database.connect")

function getCollection(){
    return getDatabase().collection('tarefa')
}


function readAll(){
    return getCollection().find().toArray()
}

function readById(id){
    return getCollection().findOne({_id: new ObjectId(id)})
}

function create(novaTarefa){
    return getCollection().insertOne(novaTarefa)
}

function update(id,update){
    return getCollection().updateOne({_id: new ObjectId(id)}, {$set: update})
}

function deleteById(id){
    return getCollection().deleteOne({_id: new ObjectId(id)})
}


module.exports = {
    readAll,
    readById,
    create,
    update,
    deleteById
}