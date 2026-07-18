import React, { useState } from "react";

const EmployeeCrud = () => {

    const [name, setName] = useState("");
    const [employees, setEmployees] = useState([]);

    // Add Employee
    const addEmployee = () => {

        if (name.trim() === "") {
            alert("Please Enter Employee Name");
            return;
        }

        const newEmployee = {
            id: Date.now(),
            name: name
        };

        setEmployees([...employees, newEmployee]);

        setName("");
    };

    return (
        <div className="container">

            <h1>Employee Management System</h1>

            <input
                type="text"
                placeholder="Enter Employee Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={addEmployee}>
                Add Employee
            </button>

            <hr />

            <h2>Employee List</h2>

            {
                employees.map((emp) => (
                    <div key={emp.id}>
                        <h3>{emp.name}</h3>
                    </div>
                ))
            }

        </div>
    );
};

export default EmployeeCrud;