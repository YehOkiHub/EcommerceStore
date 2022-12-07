const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  let tags = await Tag.findAll({include:Product})
  res.json(tags)
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  let tags = await Tag.findOne(
  {

    include:Product,
    where: {
      id: req.params.id
    }
  }
  )
  res.json(tags)
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  res.json({msg: "added new tag"})
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id:req.params.id
    }
  })
  res.json({msg:"updated new tag"})
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  res.json({msg:"tag deleted"})
});

module.exports = router;
