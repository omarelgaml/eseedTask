var mongoose = require('mongoose');
var userSchema= mongoose.Schema({
    UserEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    Name: {
      type: String,
      trim: true,
    },
    Password: {
        type: String,
        required: true,
        trim: true
    }
  });
  mongoose.model('User', userSchema);