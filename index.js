require('dotenv').config()
const express = require('express')

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/tweeter',(req, res)=>{
    res.send('pappu bahadur')
})

app.get('/login',(req,res)=>{

    res.send('<h1>please login at pb s chai or code </>');
})

app.get('/youtube',(req,res)=>{
    res.send('<h2> chai or you tube<h2>');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})