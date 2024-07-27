const Joi = require('joi')

const tarefa = Joi.object({
    titulo: Joi.string()
            .min(1)
            .max(30)
            .required(),

    descricao: Joi.string()
                .min(1)
                .max(30)
                .required(),
    
    status: Joi.string()
            .min(1)
            .max(30)
            .required()

})

module.exports = tarefa