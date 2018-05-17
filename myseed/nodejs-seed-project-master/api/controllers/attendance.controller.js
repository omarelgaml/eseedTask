var mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  Validations = require('../utils/validations'),
  Encryption = require('../utils/encryption'),
  EMAIL_REGEX = require('../config').EMAIL_REGEX,
  Attendance = mongoose.model('Attendance');

  module.exports.getDays = function(req, res, next) {
    Attendance.find({}).exec(function(err, employees) {
      if (err) {
        return next(err);
      }
      res.status(200).json({
        err: null,
        msg: 'days retrieved successfully.',
        data: employee
      });
    });
  };

  