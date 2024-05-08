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


