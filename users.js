const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/thoughtsApp',{ useNewUrlParser: true },{ useUnifiedTopology: true });
let postSchema=mongoose.Schema({
  post:String
})
module.exports=mongoose.model('user',postSchema);