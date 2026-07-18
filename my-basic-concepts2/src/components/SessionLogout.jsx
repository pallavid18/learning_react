import React, { useEffect, useState } from 'react'

const SessionLogout = () => {

    const [user , setUser] = useState("");
    const [timeLeft , setTimeLeft] = useState(120);

    useEffect(() =>{   //This useEffect is used to retrieve the saved user and timeLeft values from sessionStorage when the component mounts. It checks if there are any saved values and updates the state accordingly.
        const savedUser = sessionStorage.getItem("user");
        const savedTime = sessionStorage.getItem("time");

        if(savedUser && savedTime){
            setUser(savedUser);
            setTimeLeft(Number(savedTime));
        }
    }, []);

    useEffect(() =>{  //This effect is use for log out automatically 
        if(!user) return;
        if(timeLeft === 0){
            logout();
            return;
        }

        const timer = setInterval(() =>{
            setTimeLeft((prev) =>{
                sessionStorage.setItem("time",prev -1);
                return prev-1;
            });
        },1000);
        return () => clearInterval(timer);

    }, [user ,timeLeft]);

    const login =() =>{
        if(!user) return alert("Enter user name");
        sessionStorage.setItem("user", user);
        sessionStorage.setItem("time", 120);
        setTimeLeft(120);
    };

    const logout = () =>{

        sessionStorage.clear();
        setUser("");
        setTimeLeft(120);
        alert("You have been logged out due to inactivity..");

    }

    return (
        <div className="container col-md-6 mt-2" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <div className='card shadow'>
                <div className='card-header bg-info-subtle text-black text-center'>
                    <h5>Auto Logout Using Session Storage</h5>
                </div>
                <div className='card-body text-center'>
                    {!sessionStorage.getItem("user") ? (
                        <>
                        <input className='form-control mb-3'
                        placeholder='Enter user Name'
                        onChange={(e) => setUser(e.target.value)}/>
                        <button className='btn btn-primary' onClick={login}>Login</button>
                        </>
                    ) : (
                        <>
                        <h5>Welcome , {sessionStorage.getItem("user")}</h5>
                        <p className='text-danger-emphasis'>You will be logged out in {timeLeft}seconds.</p>
                        <button className='btn btn-danger' onClick={logout}>Logout</button>
                        </>
                    )}
                    <hr/>
                    <p>
                        Refresh - Data Stays/Continue <br/>
                        Close tab - Data Deleted/Destroy <br/>
                        After 2min auto logout
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SessionLogout