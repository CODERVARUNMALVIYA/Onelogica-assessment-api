const calculateSalary = (salaryType, hourlyRate, hoursWorked, fixedSalary, commissionRate) => {
    let totalSalary = 0;

    switch (salaryType) {
        case 'hourly':
            totalSalary = hourlyRate * hoursWorked;
            break;
        case 'fixed':
            totalSalary = fixedSalary;
            break;
        case 'commission':
            totalSalary = commissionRate; // Adjust based on commission calculation logic
            break;
        default:
            throw new Error("Invalid salary type");
    }

    return totalSalary;
};

const calculateTax = (totalSalary, taxRate) => {
    return (totalSalary * taxRate) / 100; // You can define taxRate as a constant or as part of the employee's data
};

const calculateNetPay = (totalSalary, taxDeduction) => {
    return totalSalary - taxDeduction;
};

module.exports = { calculateSalary, calculateTax, calculateNetPay };
