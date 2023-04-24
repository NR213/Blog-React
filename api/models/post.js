const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const postschema1 = new Schema({
   title:String,
   name:String,
   content:String,
   cover:String,
   author:{type:Schema.Types.ObjectId, ref:'Userregister'},
},{
    timestamps: true,
});

const postmodel1 = model('post1', postschema1);

module.exports = postmodel1;

