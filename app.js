const express = require("express")
const app = express()

const indexRouter = require("./routes/index")
const endrouteRouter = require("./routes/endroute")
const dateMiddleware = require("./middlewares/horaMiddleware")
const validarHora = require("./middlewares/validarHora")


app.use(dateMiddleware)
app.use("/", indexRouter)
app.use('/endroute', validarHora, endrouteRouter)



app.listen(3000, ()=>{
    console.log("El puerto está escuchando en el puerto 3000")
  })