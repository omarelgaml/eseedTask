var mongoose = require('mongoose'),
  jwt = require('jsonwebtoken'),
  Validations = require('../utils/validations'),
  Encryption = require('../utils/encryption'),
  EMAIL_REGEX = require('../config').EMAIL_REGEX,
  Attendance = mongoose.model('Attendance');
  Employee = mongoose.model('Employee');
  module.exports.getEmployees = function(req, res, next) {
    Employee.find({}).exec(function(err, employee) {
      if (err) {
        return next(err);
      }
      res.status(200).json({
        err: null,
        msg: 'employees retrieved successfully.',
        data: employee
      });
    });
  };
  









  module.exports.createEmployee = function(req, res, next) {
    var valid =
      req.body.EmployeeEmail &&
      Validations.isString(req.body.EmployeeEmail) &&
      Validations.matchesRegex(req.body.EmployeeEmail, EMAIL_REGEX)
    if (!valid) {
      return res.status(422).json({
        err: null,
        msg: 'email is required field.',
        data: null
      });
    }
  
    Employee.create(req.body, function(err, employee) {
      if (err) {
        return next(err);
      }
      res.status(201).json({
        err: null,
        msg: 'Employee was created successfully.',
        data: employee
      });
    });
  };




  module.exports.deleteEmployee = function(req, res, next) {

    Employee.findByIdAndRemove(req.params.employeeId).exec(function(
      err,
      deletedEmployee
    ) {
      if (err) {
        return next(err);
      }
      res.status(200).json({
        err: null,
        msg: 'Employee was deleted successfully.',
        data: deletedEmployee
      });
    });
  };







  module.exports.updateEmployee = function(req, res, next) {
    Employee.findByIdAndUpdate(
      req.params.employeeId,
      {
        $set: req.body
      },
      { new: true }
    ).exec(function(err, updatedEmployee) {
      if (err) {
        return next(err);
      }
      res.status(200).json({
        err: null,
        msg: 'Employee was updated successfully.',
        data: updatedEmployee
      });
    });
  };

