const calculateOvertime = (clockIn, clockOut, standardHours = 8) => {
    const hoursWorked = (clockOut - clockIn) / (1000 * 60 * 60); // Convert ms to hours
    return hoursWorked > standardHours ? hoursWorked - standardHours : 0;
};

module.exports = { calculateOvertime };
