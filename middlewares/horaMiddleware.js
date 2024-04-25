const dateMiddleware = (req, res, next) =>{
    const now = new Date()
    const hours= now.getHours()
    req.horaMid = hours

    const minutes = now.getMinutes()
    req.minutosMid = minutes

    next()
}
  module.exports = dateMiddleware