const express = require("express")
const router = express.Router()

router.get("/", (req, res) =>{
    if(req.query.mensaje) {
        res.send(`<h1>HOME</h1><p>Aún no es la hora, espera hasta las 12:00 para entrar</p><button onclick="window.location.href='/'">Volver</button>`);
    } else {
        res.send(`<h1>HOME</h1><p>Hola, bienvenido a la HOME. Son las ${req.horaMid}:${req.minutosMid}</p><button onclick="window.location.href='/endroute'">ENDROUTE</button>`);
    }
})



module.exports = router