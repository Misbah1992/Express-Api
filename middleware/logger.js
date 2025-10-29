const logger = (req,res,next)=>{
  console.log(req.method)
  console.log(req.protocol)
  console.log(req.get("host"))
  next()
}

module.exports = logger
