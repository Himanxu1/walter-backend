const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const productsModel = new Schema({
  id: {type: String, required: true},
  name:{type:String,required:true},
  price:{type:String,required:true},
  description:{type : String,required: true},
  img: { type: String, required: true },
  quantity:{type:Number,require:true},
  subImg:{
    type : [String],
    default:[],
}
},
{
  timestamps: true
});

module.exports = mongoose.model("products", productsModel);