const Router = require('@koa/router')

const ProductsController = require('../controllers/ProductsController')


const router = new Router({
    prefix: '/api/products'
})

router.get('/', ProductsController.index)
router.get('/:id', ProductsController.show)
router.post('/', ProductsController.store)
router.put('/:id', ProductsController.update)
router.delete('/:id', ProductsController.destroy)


module.exports = router