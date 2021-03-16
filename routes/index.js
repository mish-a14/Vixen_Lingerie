var express = require('express');
var router = express.Router();

let productCtrl = require('../controllers/productCtrl.js')
let productModels = require('../models/productModels.js')

/* GET home page. */

// router.get('/search', async function(req, res) {
//   let searchResults = req.body
//   console.log(searchResults)
//   let search = await productModels.find({category:"title", color:"red"})
//   console.log('search button worked')
//   res.render('template.ejs', {results: search})
// }); 


router.get('/', function(req, res, next) {
  res.render('index.ejs');
});


router.get('/new', function(req, res) {
  res.render('new.ejs')
}); 

router.get('/bestsellers', function(req, res) {
  res.render('bestsellers.ejs')
}); 

router.get('/bras', async function(req, res) {
  let bras = await productModels.find({category: "bras"})
  console.log(bras)
  res.render('template.ejs', {results: bras})
}); 

router.get('/panties', async function(req, res) {
  let panties = await productModels.find({category: "panties"})
  console.log(panties)
  res.render('template.ejs', {results: panties})
}); 

router.get('/lingerie', async function(req, res) {
  let lingerie = await productModels.find({category: "lingerie"})
  console.log(lingerie)
  res.render('template.ejs', {results: lingerie})
}); 




router.get('/about', function(req, res) {
  res.render('about.ejs')
});

router.get('/FAQs', function(req, res) {
  res.render('faqs.ejs')
});

router.get('/fitting', function(req, res) {
  res.render('fitting.ejs')
});



router.get('/form', function(req, res) {
  res.render('new.ejs')
}); 

router.post('/submit', productCtrl.review) 




router.get('/addStuff', async function(req, res) {
  await productModels.create ({
    picturesUrls: ['/images/IMG_8686.jpg'],
    title: 'Red Panty', 
    category: 'panties',
    price: 80,
    size: 'small',
    color: 'red', 
    description: 'red panty set'
  })
  console.log('addStuff')
  res.render('new.ejs')
});






module.exports = router;
