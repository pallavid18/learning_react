function FruitList(){

    const fruits=["Apple","Banana","Cherry","Mango","Orange"];
    const cars=["Toyota","Honda","Ford","BMW","Audi"];
    const flowers=["Rose","Lily","Tulip","Sunflower","Daisy"];
    const numbers=[1,2,3,4,5];
    const number1=[10,20,30,40,50];
    const combinedArray=[...numbers,...number1];

    const name=["Pallavi","Rohit","Tejas","Sharvani","Disha","Pratiksha","Poornima"];
    const result =name.filter((name)=>name.startsWith("P"));
    const total = numbers.reduce((sum, num) => {return sum + num;}, 0); //For reduce example, it will return the total of all numbers in the array

    //For find example, it will return the first object with id 1
    const user = [
        {id: 1, names: "Pallavi Dhope"},
        {id: 2, names: "Disha Kute"},
        {id: 1, names: "Pratiksha Kathavate"},
        {id: 4, names: "Sharvani Gudekar"},
        {id: 5, names: "Poornima Duttargi"}
    ];

    const userResult = user.find((u)=>u.id===1); //for find example, it will return the first object with id 1
    const fruitIndex = fruits.findIndex((fruits)=>fruits==="Mango"); //for findIndex example
    const res = name.filter(name=>name.includes("h"));    //for include example
    const chechName = name.some((item)=>item.startsWith("S")); //for some example, it will return true if any name starts with "S" otherwise false
    const checkAllNames = name.every((item)=>item.startsWith("P")); //For every example, it will return true if all names start with "P" otherwise false
    const res1 =number1.every((item)=>item>0); //for every example, it will return true if all numbers in the array are positive otherwise false

    const num1 =[20,50,10,80,26,14,3]; //for sort example, it will sort the numbers in ascending order
    num1.sort((a,b)=>a-b); //for sort example, it will sort the numbers in ascending order

    const reverseName = [...name].reverse(); //for reverse example, it will reverse the order of names in the array

    return(
        <>

        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
        <h2>Fruit List Array Example</h2>
        <ul>
            {fruits.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
        </div>
        <hr/>

        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h2>Car List Array Example</h2>
            <ul>
                {cars.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <hr/>

        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h2>Flower List Array Example</h2>
            <ul>
                {flowers.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <hr/>
        
        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h2>Number List Array Example</h2>
            <ul>
                {numbers.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <hr/>

        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h2>Number1 List Array Example</h2>
            <ul>
                {number1.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <hr/>

        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h2>Combined Array Example</h2>
            <ul>
                {combinedArray.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <hr/>

        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h2>List The Name with Starting Letter P</h2>
            <ul>
                {result.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <hr/>

        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h2>Reduce the Array</h2>
            <h3>Array: {numbers.join(", ")}</h3>
            <p>Total: {total}</p>
        </div>
        <hr/>

        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h2>Array of Find example</h2>
                <p>{userResult.names}</p>
        </div>
        <hr/>

        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h2>Fruit Index Example</h2>
            <p>Index of Mango: {fruitIndex}</p>
        </div>
        <hr/>

        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h2>Filter Name with Include </h2>
            <ul>
                {res.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <hr/>

        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h2>Some Example</h2>
            <p>Is there any name that starts with "S" ? : {chechName ? "Yes" : "No"}</p>
        </div>
        <hr/>

        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h2>Every Example</h2>
            <p>Do all names start with "P" ? : {checkAllNames ? "Yes" : "No"}</p>
        </div>
        <hr/>

        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h2>Every Example with Number</h2>
            <p>Do all numbers are positive ? : {res1 ? "Yes" : "No"}</p>
        </div>
        <hr/>

        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h2>Sort Example</h2>
            <p>Sorted Numbers: {num1.join(", ")}</p>
        </div>
        <hr/>

        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h2>Reverse Example</h2>
            <p>Original Names: {name.join(", ")}</p>
            <p>Reversed Names: {reverseName.join(", ")}</p>
        </div>
        <hr/>
    </>
    )
}
export default FruitList;