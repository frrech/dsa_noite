const express = require('express')
const app = express()
const port = 3000
const produtoRouter = require('./router/produto_router');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/produtos', produtoRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})