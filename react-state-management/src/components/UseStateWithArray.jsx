import {React,  useState } from 'react'

const UseStateWithArray = () => {
    const [items,setItems] = useState([]);
    const addItem = () =>{
        setItems([...items,`Item ${items.length +1}`]);
    }
    return (
        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h4>UseState With Array</h4>
            <button className="btn btn-primary m-2" onClick={addItem}>Add Items</button>
            <ul>
                {items.map((item,i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default UseStateWithArray