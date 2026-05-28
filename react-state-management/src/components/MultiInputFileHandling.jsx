import { React, useState } from 'react'

const MultiInputFileHandling = () => {

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        city: "",
        gender: ""
    });

    const [errors, SetErrors] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const validate = () => {
        let error = {};
        if (!form.fullName.trim()) {
            error.fullName = "Full Name is Required"
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!form.email) {
            error.email = "Email is required";
        } else if (!emailRegex.test(form.email)) {
            error.email = "Invalid Email Format";
        }

        const passwordRegex = /^(?=.*[0-9]).{6,}$/;
        if (!form.password) {
            error.password = "Password is required";
        } else if (!passwordRegex.test(form.password)) {
            error.password = "Invalid password Format";
        }

        if (!form.city) {
            error.city = "Please Select City";
        }
        if (!form.gender) {
            error.gender = "Please Select Gender";
        }
        SetErrors(error);
        return Object.keys(error).length === 0;
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            alert("Form Submitted Successfully");

        }
    }

    return (
        <div className="container p-4 mt-4  w-50" style={{ border: "1px solid blue", borderRadius: "5px", padding: "10px" }}>
            <div className="container mt-5 d-flex justify-content-center">
                <div className="card shadow-lg border-0 rounded-4 p-4" style={{
                        width: "40rem",
                        background: "#f8f9fa"
                    }}
                >

                    {/* Heading */}
                    <h2 className="text-center text-primary fw-bold mb-4">Registration Form</h2>
                    <p className='container d-flex justify-content-center'> Controlled Form with Validation -Use State</p>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div className="mb-3">
                            <label className="form-label fw-bold">Full Name</label>
                            <input
                                type="text"
                                className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                                name="fullName"
                                value={form.fullName}
                                onChange={handleChange}
                                placeholder="Enter Full Name"
                            />

                            {errors.fullName &&
                                <div className="invalid-feedback">{errors.fullName}</div>
                            }
                        </div>

                        {/* Email */}
                        <div className="mb-3">
                            <label className="form-label fw-bold">Email</label>
                            <input
                                type="text"
                                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter Email"
                            />

                            {errors.email &&
                                <div className="invalid-feedback">{errors.email}</div>}
                        </div>

                        {/* Password */}
                        <div className="mb-3">
                            <label className="form-label fw-bold">Password</label>
                            <input
                                type="password"
                                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Enter Password"
                            />

                            {errors.password &&
                                <div className="invalid-feedback">{errors.password}</div>}
                        </div>

                        {/* City */}
                        <div className="mb-3">
                        <label className="form-label fw-bold">City</label>
                            <select
                                className={`form-select ${errors.city ? "is-invalid" : ""}`}
                                name="city"
                                value={form.city}
                                onChange={handleChange}
                            >
                                <option value="">Choose City...</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Pune">Pune</option>
                                <option value="Nashik">Nashik</option>
                                <option value="Nagpur">Nagpur</option>
                            </select>

                            {
                                errors.city &&
                                <div className="invalid-feedback">
                                    {errors.city}
                                </div>
                            }

                        </div>

                        {/* Gender */}
                        <div className="mb-4">
                            <label className="form-label fw-bold d-block">
                                Select Gender
                            </label>

                            <div className="form-check form-check-inline">

                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    checked={form.gender === "Male"}
                                    onChange={handleChange}
                                />

                                <label className="form-check-label">
                                    Male
                                </label>

                            </div>

                            <div className="form-check form-check-inline">

                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    checked={form.gender === "Female"}
                                    onChange={handleChange}
                                />

                                <label className="form-check-label">
                                    Female
                                </label>

                            </div>

                            {
                                errors.gender &&
                                <div className="text-danger mt-2">
                                    {errors.gender}
                                </div>
                            }

                        </div>

                        {/* Button */}

                        <button className="btn btn-primary w-100 fw-bold py-2 rounded-3">

                            Submit

                        </button>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default MultiInputFileHandling