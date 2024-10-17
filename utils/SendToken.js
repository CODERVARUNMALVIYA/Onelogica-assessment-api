// exports.sendtoken = (user, statuscode, res) => {
//   const token = user.getjwttoken();

//   if (!token) {
//     return res
//       .status(500)
//       .json({ success: false, message: "Token generation failed" });
//   }

//   const options = {
//     expires: new Date(
//       Date.now() + process.env.EXPIRES_JWT * 24 * 60 * 60 * 1000
//     ),
//     httpOnly: true,
//   };

//   res
//     .status(statuscode)
//     .cookie("token", token, options)
//     .json({ success: true, id: user._id, token });
// };
// exports.sendToken = (user, statusCode, res) => {
//   const token = user.generateJWT();
//   res.status(statusCode).json({
//       success: true,
//       token,
//       user,
//   });
// };
const sendToken = (employee, statusCode, res) => {
  const token = employee.getJWTToken(); // Ensure this method exists in your employee model

  // Set cookie options
  const options = {
    expires: new Date(Date.now() + process.env.EXPIRES_JWT * 24 * 60 * 60 * 1000), // Change this according to your needs
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
    employee,
  });
};

module.exports = sendToken;


