import  {React, useEffect, useState } from 'react'

const UseEffectStopWatch = () => {

    const [time , setTime] = useState(0);
    const [running , setRunning] = useState(false);

    useEffect(() => {
        let interval;
        if(running){
            interval = setInterval(() =>{
                setTime((prevTime) => prevTime + 1);
            },1000);
        }
        return () => clearInterval(interval);
    },[running]);

    return (
        <div> </div>
    )
}

export default UseEffectStopWatch