const According_Props = ({ id, title, contains }) => {
    return (
        <>


            <div
                className="accordion-item"
                style={{
                    marginBottom: "15px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    border: "1px solid #ddd",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }}
            >
                <h2 className="accordion-header">

                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${id}`}
                        style={{
                            backgroundColor: "#0d6efd",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "18px"
                        }}
                    >
                        {title}
                    </button>

                </h2>

                <div
                    id={`collapse${id}`}
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                >
                    <div
                        className="accordion-body"
                        style={{
                            backgroundColor: "#ffffff",
                            color: "#444",
                            lineHeight: "1.8",
                            fontSize: "16px"
                        }}
                    >
                        {contains}
                    </div>
                </div>
            </div>


        </>
    )
};

const PassingFunction = ({ clickMe }) => (
    <button onClick={clickMe} style={{
        backgroundColor: "#0d6efd",
        color: "white",
        border: "none",
        padding: "12px 25px",
        borderRadius: "10px",
        fontSize: "16px",
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
        }}>Click Me</button>

);

const PassingImage =({photo})=> <img
    className="img-fluid"
    src={photo}
    width="400"
    alt="Image"
    style={{
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      padding: "5px",
      border: "3px solid white",
      transition: "0.3s",
      cursor: "pointer",
      margin:"10px"
    }}
    onMouseOver={(e) => {
      e.target.style.transform = "scale(1.05)";
    }}
    onMouseOut={(e) => {
      e.target.style.transform = "scale(1)";
    }}
  />;

export { According_Props, PassingFunction ,PassingImage};