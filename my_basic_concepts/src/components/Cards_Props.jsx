const Cards_Props =(props)=>{
    return(
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
      {props.title}
    </h5>

    <p
      className="card-text"
      style={{
        color: "#3a0b29",
        fontSize: "16px",
        lineHeight: "1.6"
      }}
    >
      {props.text}
    </p>

    <button
      style={{
        marginTop: "15px",
        padding: "10px 20px",
        border: "none",
        borderRadius: "8px",
        backgroundColor: "#9ef3f6",
        color: "black",
        cursor: "pointer",
        fontWeight: "bold"
      }}
    >
      Read More
    </button>

  </div>
</div>
        
        </>
    )
}
export default Cards_Props;