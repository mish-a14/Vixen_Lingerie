//this is for reviews !! 

function review(req, res) {
  console.log(req.body)
  res.send('thanks for the review hottie')
};



module.exports = {review: review}