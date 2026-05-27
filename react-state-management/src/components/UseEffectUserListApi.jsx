import { React, useEffect, useState } from 'react'

const UseEffectUserListApi = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            });
    }, []);


    return (
        <div className="container" style={{ border: "1px solid blue", borderRadius: "5px", padding: "10px" }}>
            <h5>UseEffectUserListApi</h5>
            <div className="container mt-4 shadow-lg p-4 rounded" style={{border: "2px solid #0d6efd", backgroundColor: "#f8f9fa"}}>
                <h2 className="text-center text-primary mb-4">User List API Table</h2>
                <hr/>
                <div className="table-responsive">
                    <table className="table table-bordered table-hover table-striped text-center align-middle">
                        <thead className="table-success">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone No</th>
                                <th>Website</th>
                                <th>Address</th>
                            </tr>

                        </thead>

                        <tbody>
                            {users.map((u) => (
                                    <tr key={u.id}>
                                        <td >{u.name}</td>
                                        <td>{u.email}</td>
                                        <td>{u.phone}</td>
                                        <td>{u.website}</td>
                                        <td>{u.address.city}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UseEffectUserListApi