import { React, useState } from 'react'

const UseStateWithHideShowPassword = () => {
    const [showPass, setShowPass] = useState(false);
    return (
        <div className="container" style={{ border: "1px solid blue", borderRadius: "5px", padding: "10px" }}>
            <h4>UseStateWithHideShowPassword</h4>
            <input
                className="form-control d-inline w-50"
                type={showPass ? "text" : "password"}
                placeholder="Enter Password"
            />
            {/* <button className="btn btn-primary m-2" onClick={() => setShowPass(!showPass)}>{showPass ? "Hide" : "Show"} Password </button> */}
            <button className="btn btn-primary m-2" onClick={() => setShowPass(!showPass)}>  {showPass
                    ? <i className="bi bi-eye-slash-fill"></i>
                    : <i className="bi bi-eye-fill"></i>
            }
            </button>
        </div>
    )
}

export default UseStateWithHideShowPassword