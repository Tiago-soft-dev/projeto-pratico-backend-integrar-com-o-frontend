const { getDatabase } = require("../database/database.connect")

function getCollection(){
    return getDatabase().collection('tarefa')
}


function readAll(){
    return getCollection().find().toArray()
}

module.exports = {
    readAll
}