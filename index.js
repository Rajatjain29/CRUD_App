var express = require('express');
var router = express.Router();
const userModel=require('./users');

/* GET home page. */
router.get('/', function(req, res) {
res.render('index')
})



router.post('/create',function(req,res){
  userModel.create({
    post:req.body.post
  }).then(function(data){
    res.redirect('/read');
  }).catch(function(err){
    res.send(err)
  });
});
router.get('/read',function(req,res){
  userModel.find()
  .then(function(readed){
    res.render('read',{data:readed});
    });
});


router.get('/update',function(req,res){
  res.render('update');
})

router.get('/delete/:aiidee',function(req,res){
  userModel.findOneAndDelete({_id:req.params.aiidee})
  .then(function(deleted){
    res.redirect('/read');
  });
});

router.get('/update/:aiidee',function(req,res){
  userModel.findOne({_id:req.params.aiidee})
  .then(function(updated){
    res.render('update',{data:updated});
  });
});



router.post('/update/:aiidee',function(req,res){
  const post = {post: req.body.post};
  userModel.findOneAndUpdate({_id:req.params.aiidee},{$set:post}, {new: true})
  .then(function(updateddata){
    res.redirect('/read');
  }).catch(function(err){
    res.send(err)
    
  });
});

module.exports = router;
