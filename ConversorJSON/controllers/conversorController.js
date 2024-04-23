const { Validator } = require("jsonschema")
const CreditoFiscal = require("../models/fe-ccf-v3.json")

const validator = new Validator()
const conversor = async (req, res) => {
    try {
        const object = req.body
        const result = validator.validate(req.body, CreditoFiscal)
        console.log(result)
       if(result.errors.length > 0) {
           res.status(400).json({ message: "Error de validacion", errors: result.errors })
           return
         }else{
            res.json({ message: "Validador de JSON", object })
            }
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { conversor }