var mongoose = require('mongoose');

var employeeSchema= mongoose.Schema({
    EmployeeEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    Name: {
      type: String,
      trim: true,
    },
    Mobile: {
      type:Number
    },
    HireDate: {
      type: Date
    }
  });
  var statusSchema= mongoose.Schema({

    Present: {
        type: Boolean
 
      },
    Absent: {
      type: Boolean
    },
    SickLeave: {
      ype: Boolean
    },
    DayOff: {
      ype: Boolean
    }
  }); 

  var attendanceSchema= mongoose.Schema({

    Date: {
        type: Date,
        required: true
      },
    WorkingHours: {
      type: Number
    },
    Employee: employeeSchema,
    Status: statusSchema
  });
  mongoose.model('Attendance', attendanceSchema);
  mongoose.model('Employee', employeeSchema);
  mongoose.model('Status', statusSchema);
  



 