const employee = {
    name: "Greg",
    streetAddress: "1 Hope st"
}

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    const updateEmployee = {
        ...employee,
        [key]: value,
    }

    return updateEmployee;
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value

    return employee
}

const deleteFromEmployeeByKey = (employee, key) => {
    const updateEmployee = { ...employee}

    delete updateEmployee[key]

    return updateEmployee
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key]

    return employee
}
