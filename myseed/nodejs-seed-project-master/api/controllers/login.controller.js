var mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  Validations = require('../utils/validations'),
  Encryption = require('../utils/encryption'),
  User = mongoose.model('User');
  module.exports.login = function (req, res, next) {

    var valid =
    req.body.email &&
    Validations.isString(req.body.email) &&
    
    req.body.password &&
    Validations.isString(req.body.password);
  // not valid format 
  if (!valid) {
    return res.status(422).json({
      err: null,
      msg:
        'Email(examble@domain.com) and Password(String) are required fields!',
      data: null
    });
  }
  console.log(req.body.email +"ssdfsdfsfsfsfsfsdf");
  if(req.body.email=="omar" && req.body.password=="12345" ){
    return res.status(200).json(user);

  }
 /* User.findOne({
    email: req.body.email.trim().toLowerCase()
  }).exec(function (err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
        return res
          .status(404)
          .json({
            err: null, msg: 'User not found. Please register frist!', data: null
          });
      }
else{
    if(user.Password === req.body.password) {
        return res.status(200).json(user);
    } else {
        //always failed
        return res.status(402).send({"message": "invalid credentials"});
    }


}

  })
  };
*/
  }