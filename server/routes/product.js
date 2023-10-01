const router = require('express').Router();
const Product = require('../models/product');
const ProductCategory = require('../models/productcategory')

// get all product
router.get('/:type', async (req, res) => {
   const type = req.params.type
   if(type === 'product'){
      try {
         const product = await Product.find()
         res.status(200).json({
            message: 'product get sucessfully',
            result: product
         })
      } catch (error) {
         res.status(500).json({
            error: error,
         })
      }
   }
   else if(type === 'categories'){
      const category = await ProductCategory.find();
      try {
         res.status(200).json({
            message: 'category get sucessfully',
            result: category
         })
      } catch (error) {
         res.status(500).json({
            error: error,
         })
      }
   }
})

// add new product
router.post('/addProduct', async (req, res) => {
   console.log(req.body);
   // const newProduct = new Product(req.body);
   // try{
   //    const result = await newProduct.save()
   //    res.status(200).json({
   //       message: 'product inserted successfully',
   //       result: result,
   //    })
   // }catch(error){
   //   res.status(500).json({
   //      error: error
   //   })
   // }
})

// get single product based on id
router.get('/:id', async (req, res) => {
   try {
      const updatedResult = await Product.findById(
         { _id: req.params.id },
      );
      res.status(200).json({
         message: 'Product filter sucessfully',
         result: updatedResult,
      })
   } catch (error) {
      res.status(500).json({
         error: error
      })
   }
})

// update product based on id
// router.put('/:id', async (req, res) => {
//    const result = await Product.findByIdAndUpdate({ _id: req.params.id }, {
//       $set: {
//          title: 'Men tshirt',
//       },
//    },
//       {
//          new: true,
//          findAndModify: false
//       },
//       (error) => {
//          if (error) {
//             res.status(500).json({
//                error: 'there was server side error update'
//             })
//          } else {
//             res.status(200).json({
//                success: 'Product Updated Sucessfully'
//             })
//          }
//       )
//       res.status(200).json({
//          message: 'Product Edit Sucessfully',
//          result: updatedResult
//       })
//    } catch (error) {
//       res.status(500).json({
//          error: error
//       })
//    }
// })

// delete product by id
router.delete('/:id', async (req, res) => {
   try {
      const deleteProduct = await Product.findByIdAndDelete(
         { _id: req.params.id },
      );
      res.status(200).json({
         message: 'Product Deleted Sucessfully',
         result:   deleteProduct,
      })
    
   } catch (error) {
      res.status(500).json({
         error: error
      })
   }
})

// find product by category
router.get('/category/:name', async (req, res) => {
   try {
      const result = await Product.find({category: req.params.name})
      res.status(200).json({
         message: 'product filter sucessfully',
         result: result,
      })
   }catch (error) {
      res.status(500).json({
         error: error
      })
   }
})

/* ================ product category ================*/
// add new product category
router.post('/addCategory', async (req, res) => {
   const newProductCategory = new ProductCategory(req.body);
   try{
      const result = await newProductCategory.save()
      res.status(200).json({
         message: 'product Category inserted successfully',
         result: result,
      })
   }catch(error){
     res.status(500).json({
        error: error
     })
   }
})


// update product based on id
router.put('/category/:id', async (req, res) => {
   try {
      const updatedResult = await ProductCategory.findByIdAndUpdate(
         { _id: req.params.id },
         {
            category: "Men's clothing"
         },
         {
            new: true
         }
      );
      res.status(200).json({
         message: 'Product Edit Sucessfully',
         result: updatedResult
      })
      
   } catch (error) {
      res.status(500).json({
         error: error
      })
   }
})


// delete category 
router.delete('/category/:id', async (req, res) => {
   try {
      const deleteCategory = await ProductCategory.findByIdAndDelete(
         { _id: req.params.id },
      );
      res.status(200).json({
         message: 'Product Category Deleted Sucessfully',
         result:   deleteCategory,
      })
    
   } catch (error) {
      res.status(500).json({
         error: error
      })
   }
})

module.exports = router