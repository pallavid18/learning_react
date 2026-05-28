import {React, useEffect, useState } from 'react'

const UseEffectCuurentTime = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div className="container" style={{ border: "1px solid blue", borderRadius: "5px", padding: "10px" }}>
        <div className="container m-4 d-flex justify-content-center">

            <div className="card shadow-lg border-0 rounded-4 p-4 text-center"
                style={{
                    width: "24rem",
                    background: "#f8f9fa"
                }}
            >

                <h2 className="text-primary fw-bold mb-4">Current Time </h2>

                <div className="p-4 rounded-4"
                    style={{
                        background: "#45cfe4",
                        color: "white",
                        fontSize: "40px",
                        fontWeight: "bold",
                        letterSpacing: "3px"
                    }}
                >
                    {time.toLocaleTimeString()}
                </div>
            </div>
        </div>
</div>
    )
}

export default UseEffectCuurentTime