import axios from "axios";
import { useEffect, useState } from "react"

const CrudAxios = () => {

    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [editId, setEditId] = useState(null);

    const API = "http://localhost:5001/users";
    //Read (Fetch All Users)
    const fetchUsers = async () => {
        try {
            const res = await axios.get(API);
            setUsers(res.data);
        }
        catch (error) {
            console.log("Error fetching users", error);
        }

    };

    useEffect(() => {
        const loadUsers = async () => {
            await fetchUsers();
        };
        loadUsers();
    }, []);

    const handleAdd = async () => {
        if (!name || !email) {
            alert("Please Enter All fields");
            return;
        }
        try {
            const maxId = users.length > 0 ? Math.max(...users.map((u) => Number(u.id)))
                : 0;

            const newUser = {
                id: maxId + 1,
                name,
                email
            };
            await axios.post(API, newUser);
            setName(""),
                setEmail("");
            fetchUsers();

        }
        catch (err) {
            console.log("Error Adding user", err);
        }
    }

    const handleEdit = (user) => {
        setEditId(user.id);
        setName(user.name);
        setEmail(user.email);

    }

    const handleUpdate = async () => {
        console.log("Updating ID", editId);

        try {
            await axios.put(`${API}/${editId}`, {
                id: editId,
                name,
                email
            });
            setEditId(null);
            setName("");
            setEmail("");
            fetchUsers();
        }
        catch (err) {
            console.log("Error Updating User", err);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API}/${id}`);
            fetchUsers();
        } catch (err) {
            console.log("Error deleting user", err);
        }
    };

    return (
        <div className="container" style={{ border: "1px solid blue", borderRadius: "5px", padding: "10px" }}>

            <h2 className="text-center mb-4 bg-danger-subtle">CRUD App - using JSON db</h2>

            <div className="card-shadow">
                <h5>{editId ? "Update User" : "Add new User"}</h5>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                {editId ? (
                    <button className="btn btn-outline-primary m-2" onClick={handleUpdate} >Update User</button>
                ) : (
                    <button className="btn btn-sm btn-outline-info m-2" onClick={handleAdd}> Add User</button>
                )}
            </div>

            <table className="table table-bordered bg-gradient-to-r from-pink-200 to-yellow-200">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u) => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>
                                <button className="btn btn-sm btn-outline-primary m-1" onClick={() => handleEdit(u)}>Edit</button>
                                <button className="btn btn-sm btn-outline-danger m-1" onClick={() => handleDelete(u.id)}>Delete</button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CrudAxios