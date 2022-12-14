const router = require('express').Router();
const { Product, Category} = require('../../models');
const auth = require("../../utils/auth");
const dayjs = require("dayjs")

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  let products = await Product.findAll({include:[Category, Tag]});
  res.json(products)
});

// get one product
router.get('/:id', async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  let products = await Product.findOne(
    {
      include:[Category, Tag],
      where: {
        id: req.params.id
      }
    
    }
    );
  res.json(products)

});

// create new product
router.post('/', auth,  (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put('/:id', auth, (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // find all associated tags from ProductTag
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      // get list of current tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      // create filtered list of new tag_ids
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      // figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', auth, (req, res) => {  
  ProductTag.destroy({
    where:{
      product_id: req.params.id
    }
  })

  Product.destroy({
    where: {
      id: req.params.id
    }
  })
  res.json({msg:"Product deleted"})
});

router.get('/addtocart/:id', async (req, res) => {
  console.log(req.session)
  if(req.session == undefined || req.session == null || req.session.logged_in == undefined || req.session.logged_in == false){
    res.json({message: "Please log in to add product to cart"})
  }else{
    let product_id = req.params.id
    if(req.session.cart == undefined) {
      req.session.cart = []
    }
    req.session.cart.push({
      product_id: product_id,
      date: dayjs()
    })
    res.json({message: "Product added to cart"})
  }
 

});



module.exports = router;
