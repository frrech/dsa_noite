const express = require('express')
const app = express()
const port = 3000
const produtoRouter = require('./router/produto_router');
const userRouter = require('./router/user_router')
const loginController = require('./controller/login_controller')
const auth_middleware = require('./middleware/auth_middleware')
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

app.post('/api/login', loginController.verificarLogin())
app.use(auth_middleware, auth_middleware.verificarAcesso)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})