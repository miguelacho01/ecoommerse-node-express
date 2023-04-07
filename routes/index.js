const express = require('express')

const  productsRouter = require('./productsRouter')
const categoriesRouter = require('./categoriesRouter')
const  usersRouter = require('./usersRouter')


function routerApi(app) {
  const router = express.Router();
  app.use('/api', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter)
  router.use('/categories', categoriesRouter)
}


module.exports = routerApi
