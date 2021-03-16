//this is for reviews !! 

function review(req, res) {
    console.log(req.body)
    res.send('thanks cupcake')
  };

  module.exports = {review: review}