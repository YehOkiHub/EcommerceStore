const router = require('express').Router();
const { request } = require('express');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  let products = await Category.findAll({include:Product});
  res.json(products)
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  let products = await Category.findOne(
    {
      include:Product,
      where: {
        id: req.params.id
      }
    
    }
    );
  res.json(products)


});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  res.json({msg: "category added"})
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
    
  })
  res.json({msg:"category updated"})
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  res.json({msg:"category deleted"})
});

module.exports = router;
