let mongoose = require('mongoose')

let ff14Schema = new mongoose.Schema({
  Results:100
  // Character: {
  //   ActiveClassJob: {
  //       IsSpecialised: Boolean,
  //       JobID: Number,
  //       Level: Number,
  //       Name: String
  //   }
  // }
})

let FF14 = mongoose.model('ff14', ff14Schema)

module.exports = FF14