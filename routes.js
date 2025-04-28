const express = require('express')

function escucha(app){
    const router = express.Router()
    app.use('/api',router)

    router.get('/data', async function(req, res, next){
        console.log('recibio peticion get en /api/datos ')
        console.log('parametros: ',req.params)
        console.log('query',req.query)//http://localhost:9090/api/data?nombre=angel&edad=26
        try{
            res.status(200).json({
                'usuario': {
                    'nombre':'Juan Perez',
                    'edad':'26',
                    'email':'l23940414@tlajomulco.tecnm.mx'
                }
            })
        }catch(error){
            console.log(error)
        }
    })
    router.post('/data', async function(req, res, next){
        console.log('recibio peticion post en /api/datos ')
        console.log('parametros: ',req.params)
        console.log('body: ',req.body)
        console.log('query',req.query)
        try{
            res.status(200).json({
                'Peticion post ':'Satisfactoria',
                'insertado':true
            })
        }catch(error){
            console.log(error)
        }
    })
}

module.exports = escucha