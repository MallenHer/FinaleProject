const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require ('passport-local-mongoose')

let userSchema = new Schema ({
  name:String,
  lastname:String,
  age:Number,
  username:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  pic:{
    type:String,
    default:'https://www.google.com/imgres?imgurl=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_266351.png&imgrefurl=https%3A%2F%2Fwww.onlinewebfonts.com%2Ficon%2F266351&docid=3bgPZn_u2Zx1rM&tbnid=7IB0h6hOMoUDzM%3A&vet=10ahUKEwjU2u7-yOzgAhVBUKwKHTJ4C0EQMwhFKAYwBg..i&w=980&h=980&bih=582&biw=1343&q=profile%20icon%20png&ved=0ahUKEwjU2u7-yOzgAhVBUKwKHTJ4C0EQMwhFKAYwBg&iact=mrc&uact=8',
  },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Project'
    } 
  ]
}, { timestamps: true })

userSchema.plugin(passportLocalMongoose, {usernameField:"email"})

module.exports = mongoose.model ('User', userSchema)