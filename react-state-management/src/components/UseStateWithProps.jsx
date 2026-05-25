import React, { useState } from 'react'

const UseStateWithProps = ({ name, price }) => {
    const [qty, setQty] = useState(1);
    return (
        <>

                <div className="container mt-4 d-flex justify-content-center">

                    <div
                        className="card shadow-lg border-0 rounded-4 p-3"
                        style={{
                            width: "22rem",
                            background: "#f8f9fa"
                        }}
                    >

                        <div className="card-body text-center">

                            <h2 className="fw-bold text-dark">
                                {name}
                            </h2>


                            <h3 className="text-success mb-4">
                                ₹ {price}
                            </h3>


                            <div
                                className="d-flex justify-content-center align-items-center gap-3"
                            >

                                {/* Minus Button */}

                                <button
                                    className="btn btn-danger rounded-circle fw-bold"
                                    style={{
                                        width: "45px",
                                        height: "45px",
                                        fontSize: "22px"
                                    }}
                                    onClick={() => qty > 1 && setQty(qty - 1)}
                                >
                                    -
                                </button>


                                <span
                                    className="fw-bold"
                                    style={{
                                        fontSize: "24px",
                                        minWidth: "40px"
                                    }}
                                >
                                    {qty}
                                </span>


                                <button
                                    className="btn btn-success rounded-circle fw-bold"
                                    style={{
                                        width: "45px",
                                        height: "45px",
                                        fontSize: "22px"
                                    }}
                                    onClick={() => setQty(qty + 1)}
                                >
                                    +
                                </button>

                            </div>



                            <button className="btn btn-dark w-100 mt-3 rounded-pill">
                                Add To Cart
                            </button>

                        </div>

                    </div>

                </div>

        </>
    )
}



export default UseStateWithProps