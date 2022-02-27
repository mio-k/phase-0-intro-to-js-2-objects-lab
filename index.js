// Write your solution in this file!
const employee = {
    name: `mio`,
    streetAddress: `6465 San Pablo Ave`,
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee.streetAddress = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.streetAddress = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const anotherEmployee = {...employee};
    delete anotherEmployee.name;
    return anotherEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}