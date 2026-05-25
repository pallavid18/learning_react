import { useState } from "react"

const UseStateCounter = () => {

    const[count,setCount]=useState(0)
    const handleIncrement =() =>{
        setCount(prev => Math.min(prev + 1,10))
    }
    const handleDecrement =() =>{
        setCount(prev => Math.max(prev - 1, 0))
    }

    return (
    <>
    <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
        <h4>UseState using Counter</h4>
        <h5>Counter : {count}</h5>
        <hr/>
        <button className="btn btn-primary m-2" onClick={()=>setCount(count + 1)} style={{
        backgroundColor: "#0d6efd",
        color: "white",
        border: "none",
        padding: "12px 25px",
        borderRadius: "10px",
        fontSize: "10px",
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        transition: "0.3s"
    }}
        onMouseOver={(e) => {
            e.target.style.backgroundColor = "#0b5ed7";
            e.target.style.transform = "scale(1.05)";
        }}
        onMouseOut={(e) => {
            e.target.style.backgroundColor = "#0d6efd";
            e.target.style.transform = "scale(1)";
        }}>Count + </button>

        <button className="btn btn-primary m-2" onClick={()=>setCount(count - 1)} style={{
        backgroundColor: "#0d6efd",
        color: "white",
        border: "none",
        padding: "12px 25px",
        borderRadius: "10px",
        fontSize: "10px",
        fontWeight: "bold",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        transition: "0.3s"
    }}
        onMouseOver={(e) => {
            e.target.style.backgroundColor = "#0b5ed7";
            e.target.style.transform = "scale(1.05)";
        }}
        onMouseOut={(e) => {
            e.target.style.backgroundColor = "#0d6efd";
            e.target.style.transform = "scale(1)";
        }}>Count - </button>

        <hr/>

        <button className="btn btn-primary m-2" onClick={handleIncrement}>+</button>
        <button className="btn btn-primary m-2" onClick={handleDecrement}>-</button>

    </div>
    </>
    
    )
}

export default UseStateCounter