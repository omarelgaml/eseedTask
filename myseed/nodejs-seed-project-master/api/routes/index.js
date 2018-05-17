const express = require('express'),
  router = express.Router(),
  asyncMiddleware = require('express-async-handler'),
  loginCtrl = require('../controllers/login.controller');
  employeeCtrl = require('../controllers/employee.controller');
  attendanceCtrl = require('../controllers/attendance.controller');


router.post('/login/login',  loginCtrl.login);
router.get('/employee/getemployees',  employeeCtrl.getEmployees);
router.post('/employee/createEmployee',  employeeCtrl.createEmployee);
router.post('/employee/deleteEmployee',  employeeCtrl.deleteEmployee);
router.patch('/employee/updateEmployee',  employeeCtrl.updateEmployee);
//--------------------------//
router.get('/attendance/getDays',  attendanceCtrl.getDays );

module.exports = router;
