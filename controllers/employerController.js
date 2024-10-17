const Employee = require("../models/employeeModel");
const { catchAsyncErrors } = require("../middlewares/catchAsyncError");
const sendToken = require("../utils/sendToken");
const ErrorHandler = require("../utils/ErrorHandler");

exports.registerEmployee = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password, jobDetails } = req.body;

  // Validate required fields
  if (!name || !email || !password || !jobDetails?.position || !jobDetails?.salary) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const employee = await Employee.create({
      name,
      email,
      password,
      jobDetails,
    });

    sendToken(employee, 201, res);
  } catch (error) {
    console.error('Error creating employee:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

exports.loginEmployee = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  const employee = await Employee.findOne({ email }).select("+password");
  if (!employee || !(await employee.comparePassword(password))) {
    return next(new ErrorHandler("Invalid credentials", 401));
  }
  sendToken(employee, 200, res);
});

exports.getEmployeeProfile = catchAsyncErrors(async (req, res, next) => {
  const employee = await Employee.findById(req.user.id);
  res.status(200).json(employee);
});

exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
  const updatedEmployee = await Employee.findByIdAndUpdate(req.user.id, req.body, { new: true });
  res.status(200).json(updatedEmployee);
});
