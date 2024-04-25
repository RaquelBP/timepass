const validarHora = (req, res, next) => {
    if(req.horaMid >= 12 && req.horaMid <=23){
        next()
    } else {
        res.locals.mensaje = `Aún no es la hora, espera hasta las 12:00 para entrar`
        return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje))
    }
    
}
module.exports = validarHora