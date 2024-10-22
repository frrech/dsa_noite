const express = require('express')
const app = express()
const port = 3000
const produtoRouter = require('./router/produto_router');
const userRouter = require('./router/user_router')

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

function logMiddleware(req, res, next){
  console.log(Date.now(), req.method+" - "+ req.originalUrl);
  next();
}

app.use(logMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/produtos', produtoRouter)
app.use('/api/usuarios', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})