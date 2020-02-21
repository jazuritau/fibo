const joi = require('@hapi/joi')

const positionNumberSchema = joi.string().regex(/^\d*$/)    //  si no funciona probar con esta /^\d+$/

module.exports = positionNumberSchema