const Event_Example =()=>{
    const showMessage = () => { 
        alert("Button was clicked!");
    }
    const showName =(name) =>{
        alert("Hello Welcome "+name +"!");
    }

    const handleInput =(event) =>{
        console.clear();
        console.log("Input Value :"+event.target.value);
    }

    const handleMouseOver =() =>console.log("Mouse is Hovered on Text");

    const handleDbClick =() =>console.log("Mouse is Double Clicked on Text");

    return(
        <>
        <div className="container">
            <h1>Arrow Function Event Example</h1>
            <button className="btn btn-outline-primary" onClick={()=>{alert("Hello Welcome!");}}>on Click Internal</button>
        </div>
        <hr/>

        <div className="container">
            <h1>On Click Function Calling</h1>
            <button className="btn btn-outline-primary" onClick={showMessage}>on Click Function Calling </button>
        </div>
        <hr/>

        <div className="container">
            <h1>On Click Function Calling with Parameter</h1>
            <button className="btn btn-outline-primary" onClick={()=>{showName("Pallavi");}}>on Click Function Calling with Parameter</button>
        </div>
        <hr/>

        <div className="container">
            <h1>onChange Event for Input console </h1>
            <input type="text" onChange={handleInput} placeholder="Enter Name"/>
        </div>
        <hr/>

        <div className="container">
            <p onMouseOver={handleMouseOver} onDoubleClick={handleDbClick}>On Mouse Hover Text</p> //Multiple Event can be written in Single Element
        </div>
        </>
    )
}
export default Event_Example;