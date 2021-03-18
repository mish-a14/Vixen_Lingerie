var express = require('express');
const { Schema } = require('mongoose');
var router = express.Router();
const passport = require('passport');

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


let productCtrl = require('../controllers/productCtrl.js')
let productModels = require('../models/productModels.js')
let userModel = require('../models/userModel.js')
/* GET home page. */



router.get('/', function(req, res, next) {
  console.log(req.user)
  console.log('index page')
    res.render('index.ejs', {user: req.user});
  });

router.get('/new', function(req, res) {
  if (req.user) {
    res.render('new.ejs', {user: req.user})
  } else {
    res.redirect('/auth/google')
  }
}); 

router.get('/bestsellers', function(req, res) {
  res.render('bestsellers.ejs', {user: req.user})
}); 

router.get('/bras', async function(req, res) {
  let bras = await productModels.find({category: "bras"})
  console.log(bras)
  res.render('template.ejs', {results: bras, user: req.user})
}); 


router.get('/panties', async function(req, res) {
  let panties = await productModels.find({category: "panties"})
  console.log(panties)
  res.render('template.ejs', {
              results: panties, 
              user: req.user})
}); 




router.get('/lingerie', async function(req, res) {
  let lingerie = await productModels.find({category: "lingerie"})
  console.log(lingerie)
  res.render('template.ejs', {results: lingerie, user: req.user})
}); 

router.get('/products/:id', async function(req, res) {
  console.log('HELLLOOOOOOOOO')
  console.log(req.params.id)
  let product = await productModels.findById(req.params.id)
  console.log(product)
  res.render('productTemplate.ejs', {product: product, user: req.user})
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




//handler to handle post request. 
router.post('/product/:id/submit', async function(req, res) {
  console.log(req.body)
  console.log(req.params.id)
  let productDocument = await productModels.findOne({_id: req.params.id})
  console.log(productDocument)
  let reviewObj = {
    picturesUrl: req.body.pictures,
    comment: req.body.comment, 
    rating: req.body.rating, 
  }
  productDocument.reviews.push(reviewObj)
  await productDocument.save()
  res.send('thanks hottie ;), we got your review')
});




router.get('/addStuff', async function(req, res) {
  await productModels.create ({
    picturesUrls: ['/images/IMG_8678.jpg'],
    title: 'brown Panty', 
    category: 'bras',
    price: 80,
    size: 'small',
    color: 'brown', 
    description: 'brown panty set'
  })
  console.log('addStuff')
  res.render('new.ejs')
});


//EMAIL NEWSLETTER 

router.get('/newsletterform', function(req, res) {
  res.render('index.ejs')
}); 

router.post('/submission', function(req, res){
  console.log('HELOLOLOLOLOL HEY HEYY YEYEYEYEKBLHDBLKBF:KFB:KFHB:KFJB:KJFB:FKJB:FKJBF:KJFB')
  console.log(req.body)
  res.send("thanks for signing up hottie!")
}) 

//MY BAG


router.get('/mybag', function(req, res) {
  res.render('bag.ejs')
});


router.post('/mybag/:id', async function(req, res) {
  console.log('HELLO')
  console.log("product id", req.params.id)
  console.log("username", req.user.name)
  console.log("user id", req.user.id)

  //look up user document and put the product id in thier bag... 

  let userDocument = await userModel.findById(req.user.id)
  console.log('Alex made me do all this')
  console.log(userDocument)
  userDocument.bag.push(req.params.id)
  await userDocument.save()
  res.send('hey!!!!!!')
});


function show(req, res) {
  product.findById(req.params.id)
  .populate('bag').exec(function(err, product) {

    res.render('/mybag', {total: 'bag detail', product}); 
  });
}



module.exports = router;
