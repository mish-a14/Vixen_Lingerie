//this is for reviews !! 

function review(req, res) {
  console.log(req.body)
  res.send('thanks cupcake')
};



function addFact(req, res, next) {
  req.user.facts.push(req.body);
  req.user.save(function(err) {
    res.redirect('/students');
  });
}
  module.exports = {review: review}