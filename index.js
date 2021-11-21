// Write your solution in this file!
const employee = {
   name: 'defaultName',
   streetAddress: 'defaultAddress' ,
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {...obj};
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
//1) deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
//2) does not modify the original employee (it is non-destructive)
    const newEmployee = {...obj};
    delete newEmployee[key];
    return newEmployee;
    
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
//3) returns employee without the deleted key/value pair
//4) modifies the original employee
    delete obj[key];
    return obj;
}