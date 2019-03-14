const mongoose = require ('mongoose')
const Schema = mongoose.Schema


let projectSchema = new Schema ({
  nameproject:String,
  sector:String,
  function:String,
  description:String,
  achivement:String,
  find:String,
  offer:String,
  other:String,
}, { timestamps: true })


module.exports = mongoose.model ('Project', projectSchema)