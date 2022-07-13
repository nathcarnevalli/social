const express = require('express')
const app = express()
const linkRouter = require('./routes/linkRouter')
const path = require('path')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use('/', linkRouter)

app.listen(3000, () => {
  console.log('Server is running...')
})
