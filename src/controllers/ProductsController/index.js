const Product = require('../../models/Product')

class ProductsController {

    index = async (ctx) => {
      try {
        const data = await Product.find()
        ctx.body = data
      } catch (error) {
          console.error(error);
      }
    }

    show = async (ctx) => {
        try {
            const { id } = ctx.params
            const data = await Product.findById(id)
            if (data){
                ctx.body = data
            }else{
                throw new Error
            }
        } catch (error) {
            ctx.body ="Данных не найдено"
        }
      }

      store = async (ctx) => {
        try {
            const data = ctx.request.body
            const newProduct = await Product.create(data)
            ctx.body = newProduct
           
        } catch (error) {
           console.error(error);
        }
      }

      update = async (ctx) => {
        try {
            const data = ctx.request.body
            const {id} = ctx.params
            await Product.findByIdAndUpdate(id, data)
            ctx.body = 'Обновлен'
           
        } catch (error) {
           console.error(error);
        }
      }
      destroy = async (ctx) => {
        try {
            const {id} = ctx.params
            await Product.findByIdAndDelete(id)
            ctx.body = 'Deleted'
           
        } catch (error) {
           console.error(error);
        }
      }
}

module.exports = new ProductsController()