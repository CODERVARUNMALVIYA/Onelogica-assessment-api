// app.js
require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const session = require("express-session");
const cookieparser = require("cookie-parser");

// CORS setup
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
console.log("CORS setup done");

// Database connection
require("./database/dbConnection").connectDatabase();

// Logger setup
app.use(logger("tiny"));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Session and cookie setup
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.EXPRESS_SESSION_SECRET,
    cookie: {
      maxAge: 3600000, // 1 hour in milliseconds
    },
  })
);
app.use(cookieparser());

// Routes setup
app.use("/employee", require("./routes/employeeRouter")); // Employee routes
app.use("/manager", require("./routes/managerRouter")); // Manager routes
app.use("/goals", require("./routes/goalRouter"));
app.use("/reviews", require("./routes/reviewRouter"));
app.use("/development-plans", require("./routes/developmentPlanRouter"));
app.use("/attendance", require("./routes/attendance"));
app.use("/overtime", require("./routes/overtime"));
app.use("/leave", require("./routes/leave"));
app.use("/payroll", require("./routes/payroll"));
app.use("/benefits", require("./routes/benefits"));
// Error handler
const ErrorHandler = require("./utils/ErrorHandler");
const { generatedErrors } = require("./middlewares/error");
app.all("*", (req, res, next) => {
  next(new ErrorHandler(`Requested URL Not Found ${req.url}`, 404));
});
app.use(generatedErrors);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

