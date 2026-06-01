import  { React, useEffect, useState } from 'react'

const TodoArrayLocalStorage = () => {

    const [ task , setTask] = useState("");
    const [tasks , setTasks ] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("tasks"));
        if(saved){
            setTasks(saved);
        }
    }, []);

    const addTask =() =>{
        const newTasks = [...tasks,task];
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
        setTask("");
    }

    return (
        <div className="container col-md-6" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h5>TODo ArrayList - Local Storage</h5>
            <input className='form-control'
            value={task}
            onChange={(e) => setTask(e.target.value)}/>

            <button className='btn btn-primary mt-2' onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((t,index) => (
                    <li key = {index}>{t}</li>
                ))}
            </ul>

        </div>
    )
}

export default TodoArrayLocalStorage