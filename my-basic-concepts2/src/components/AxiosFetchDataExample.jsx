import { useEffect, useState } from 'react'
import axios from 'axios';

const AxiosFetchDataExample = () => {

    const [users , setUsers] = useState([]);
    const [posts , setPosts] = useState([]);
    const [comments , setComments] = useState([]);


    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const  userRes = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUsers(userRes.data);

                const postRes = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setPosts(postRes.data);

                const commentRes = await axios.get("https://jsonplaceholder.typicode.com/comments");
                setComments(commentRes.data);

            }
            catch(error){
                console.log("Api Error " ,error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h5>USer Name List</h5>
            <ol>
                {users.map((u) => (
                    // return <li key={u.id}> Name : {u.name} - Email : {u.email}</li>
                    <li key={u.id}> Name : {u.name} - Email : {u.email}</li>
                ))}
            </ol>
            <hr/>
            <ol>
                {posts.slice(0,50).map((p) => (
                    <li key={p.id}>
                        <strong>{p.title}</strong>
                        <p>{p.body}</p>
                    </li>
                ))}
            </ol>
            <hr/>
            <ol>
                {comments.map((c) => (
                    <li key={c.id}>
                        <strong>{c.name}</strong>
                        <p>{c.email}</p>
                        <p>{c.body}</p>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default AxiosFetchDataExample