import React, { useEffect, useState } from 'react'

const TodoCrud = () => {

    const [task , setTask ] = useState("");
    const [list , setList] = useState([]);
    const [edit , setEdit] = useState(null);
    useEffect(() =>{
        setList(JSON.parse(localStorage.getItem("todo")) || []);
    }, []);

    const save = (data) =>{
        setList(data);
        localStorage.setItem("todo",JSON.stringify(data));

    };
    const submit = () =>{
        if(!task) return alert("Enter Task");
        if(edit !==null){
            list[edit] = task;
            save([...list]);
            setEdit(null);
        }else{
            save([...list, task]);
        }
        setTask("");
    }

    const remove = (i) =>{
        if(confirm("Are u sure to delete this task?")){
            const newList = list.filter((item,index) =>{
                return index !== i;
            })
            save(newList);
        }
    };

    const editTask =(i) =>{
        setTask(list[i]);
        setEdit(i);
    }
    const clearAll =() =>{
        if(confirm("Are u sure to clear all tasks?")){
            save([]);
        }
    }

    return (
        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h5>Todo App -CRUD</h5>
            <div className='card'>
                <div className="card-body">
                    <div className='input-group mb-3'>
                        <input className='form-control'
                        value ={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder='Enter Task'/>
                        <button className='btn btn-primary m-2' onClick={submit}>
                            {edit !== null ? "Update Task ": "Add Task"}
                        </button>
                    </div>
                    <ul className='list-group'>
                        {list.map((t, i)=>(
                            <li className='list-group-item' key={i}>
                                {t}
                                <button className='btn btn-warning m-3' onClick={() => editTask(i)}>Edit</button>
                                <button className='btn btn-danger m-1' onClick={() => remove(i)}>Delete</button>
                            </li>
                        ))}
                        {list.length > 0 && (
                            <button className='btn btn-info w-50  align-items-center m-auto mt-2' onClick={clearAll}>Clear All</button>
                        )}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default TodoCrud