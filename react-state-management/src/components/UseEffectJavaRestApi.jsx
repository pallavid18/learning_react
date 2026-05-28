import  {React, useEffect, useState } from 'react'

const UseEffectJavaRestApi = () => {

        const [person, setPerson] = useState([]);
        useEffect(() => {
            fetch("http://localhost:8080/api/persons")
                .then((res) => res.json())
                .then((data) => {
                    setPerson(data);
                });
        }, []);
    

    return (
        <div className="container" style={{ border: "1px solid blue", borderRadius: "5px", padding: "10px" }}>
        <div className="container mt-4 shadow-lg p-4 rounded" style={{border: "2px solid #0d6efd", backgroundColor: "#f8f9fa"}}>
                <h2 className="text-center text-primary mb-4">Java List API Table</h2>
                <hr/>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover table-striped text-center align-middle">
                        <thead className="table-success">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>

                        </thead>

                        <tbody>
                            {person.map((per) => (
                                    <tr key={per.id}>
                                        <td>{per.id}</td>
                                        <td >{per.name}</td>
                                        <td>{per.email}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UseEffectJavaRestApi