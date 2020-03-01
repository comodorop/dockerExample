const express = require('express')
const app = express()
app.get('/', (req, resp)=>{
  return resp.status(200).send({msg: "Hello"})
})

app.listen(8000 , () =>{
  console.log("ADC")
  console.log("Se ejecuto el server en el puerto 8000")
})