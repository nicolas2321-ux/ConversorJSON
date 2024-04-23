const { Validator } = require("jsonschema")
const CreditoFiscal = require("../models/fe-ccf-v3.json")
const FacturaElectronica = require("../models/fe-fc-v1.json")
const validator = new Validator()
const revisionFactura = async (req, res) => {
    try {
        const object = req.body
        const tipo = req.params.tipo
        let result = null	
        if(tipo === "FacturaElectronica"){
         result = validator.validate(req.body, FacturaElectronica)
        }else if(tipo === "CreditoFiscal"){
         result = validator.validate(req.body, CreditoFiscal)
        }else{
            res.status(400).json({ message: "Tipo de factura no soportado" })
            return
        }
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



module.exports = { revisionFactura }