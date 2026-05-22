const Conditional_Statement =()=>{

    const age =20;
    const isAdmin =true;
    const hasPermission = false;

    function Admin(){
        return <h4>Admin Panel</h4>
    }
    function User(){
        return <h4>User Dashboard</h4>
    }
    const isAdminOrUser = false; //for multiple conditions example, it will check if the user is admin or user and render the appropriate component
    const marks=45; //ternary operator example, it will check if the marks are greater than or equal to 35 and render "Pass" in green color, otherwise it will render "Fail" in red color

    const item =[];

    return(
        <>
        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h2>Conditional Statement Example</h2>
            <h4>You Age: {age}</h4>
            <p>{age>=18 ? "You are eligible to vote." : "You are not eligible to vote."}</p>
        </div>
        <hr/>

        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h2>Example Show only If condition is true </h2>
            <p>{isAdmin && <span>You are an admin..! Welcome Admin!</span>}</p>
        </div>
        <hr/>  

        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h2>Example with Multiple Conditions</h2>
            <p></p>
            <p>{hasPermission ? <span>You have permission  </span> : <span>You do not have the required permissions.</span>}</p>
        </div>
        <hr/> 

        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h2>Example with Function Components</h2>
            <p>Render different components based on conditions:</p>
            {isAdminOrUser ? <Admin/> : <User/>}
        </div>
        <hr/>

        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h2>Marks Result</h2>
            <h3 style={{color: marks>=35 ? "green" : "red", fontWeight: "bold", fontSize:"20px"}}>{marks>=35 ? "Pass" : "Fail"}</h3>
        </div>
        <hr/>

        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>        
            <h2 >Finding the items in array</h2>
            <h5>{item.length > 0 ? "item found: " + item.length : "No items found."}</h5>
        </div>
        <hr/>

        </> 
    )
}

export default Conditional_Statement;