import { useState } from "react";

const Cards_Props = ({name,price}) => {
  return (
    <>
      <div
        className="card"
        style={{
          width: "18rem",
          border: "none",
          borderRadius: "15px",
          padding: "20px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          transition: "0.3s",
          textAlign: "center"
        }}
      >
        <div className="card-body">

          <h5
            className="card-title"
            style={{
              color: "#7d0258",
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "15px"
            }}
          >
            {name}
          </h5>

          <p
            className="card-text"
            style={{
              color: "#3a0b29",
              fontSize: "16px",
              lineHeight: "1.6"
            }}
          >
            {price}
          </p>

          <button className="btn btn-primary m-2" onClick={handleIncrement}>+</button>
          <button className="btn btn-primary m-2" onClick={handleDecrement}>-</button>

        </div>
      </div>

    </>
  )
}
export default Cards_Props;