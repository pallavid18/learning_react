import  { React, useRef, useState } from 'react'

const UseRefFormHandling = () => {

    const fullNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const cityRef = useRef();
    const maleRef = useRef();
    const femaleRef = useRef();
    const [errors , SetErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault(); //denied page reload

        const formData ={
            fullName : fullNameRef.current.value,
            email : emailRef.current.value,
            password : passwordRef.current.value,
            city : cityRef.current.value,
            gender : maleRef.current.checked ? "Male" : femaleRef.current.checked ? "Female" : ""
        };

        if(validate(formData)){
            console.log(formData);
            alert("Form Submitted Successfully");
        }

    };

    const validate = (data) => {

    let error = {};
        if (!data.fullName.trim()) {
            error.fullName = "Full Name is Required"
        }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email) {
            error.email = "Email is required";
        } else if (!emailRegex.test(data.email)) {
            error.email = "Invalid Email data";
        }

    const passwordRegex = /^(?=.*[0-9]).{6,}$/;
        if (!data.password) {
            error.password = "Password is required";
        } else if (!passwordRegex.test(data.password)) {
            error.password = "Invalid password Format";
        }

        if (!data.city) {
            error.city = "Please Select City";
        }
        if (!data.gender) {
            error.gender = "Please Select Gender";
        }
        SetErrors(error);
        return Object.keys(error).length === 0;

    };

    return (
        <div className="container p-4 mt-4  w-50" style={{ border: "1px solid blue", borderRadius: "5px", padding: "10px" }} >
            <h5></h5>
            <div className="container mt-5 d-flex justify-content-center">
                <div className="card shadow-lg border-0 rounded-4 p-4" style={{
                        width: "40rem",
                        background: "#f8f9fa"
                    }}
                >

                    {/* Heading */}
                    <h2 className="text-center text-primary fw-bold mb-4">Use Ref Form Handling</h2>
                    <p className='container d-flex justify-content-center'> Uncontrolled Form Example -Use Ref</p>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div className="mb-3">
                            <label className="form-label fw-bold">Full Name</label>
                            <input
                                type="text"
                                className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                                ref={fullNameRef}
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
                                ref={emailRef}
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
                                ref={passwordRef}
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
                                ref={cityRef}
                            >
                                <option value="">Choose City...</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Pune">Pune</option>
                                <option value="Nashik">Nashik</option>
                                <option value="Nagpur">Nagpur</option>
                            </select>

                        {errors.city && <div className="invalid-feedback">{errors.city}</div> } 

                        </div>

                        {/* Gender */}
                        <div className="mb-4">
                            <label className="form-label fw-bold d-block">Gender</label>
                            <div className="form-check form-check-inline">

                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    ref={maleRef}
                                    // checked={form.gender === "Male"}
                                />
                                <label className="form-check-label">Male</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    ref={femaleRef}
                                    // checked={form.gender === "Female"}
                                />
                                <label className="form-check-label">Female</label>
                            </div>
                            {errors.gender &&<div className="text-danger mt-2">{errors.gender}</div>}
                        </div>

                        {/* Button */}
                        <button className="btn btn-primary w-100 fw-bold py-2 rounded-3"> Submit</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default UseRefFormHandling