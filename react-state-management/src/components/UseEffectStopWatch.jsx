import { React, useEffect, useState } from 'react'

const UseEffectStopWatch = () => {

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [running]);

    const formatTime = () => {

        const hrs = Math.floor(time / 3600);
        const mins = Math.floor((time % 3600) / 60);
        const secs = time % 60;

        return `${hrs.toString().padStart(2, "0")} :
            ${mins.toString().padStart(2, "0")} :
            ${secs.toString().padStart(2, "0")}`;
    };


    return (
        <div className="container" style={{ border: "1px solid blue", borderRadius: "5px", padding: "10px" }}>
            <div className="container m-4 d-flex justify-content-center">
                <div className="card shadow-lg border-0 rounded-4 p-4 text-center"
                    style={{
                        width: "26rem",
                        background: "#f8f9fa"
                    }}
                >
                    <h2 className="fw-bold text-primary mb-4">Stopwatch</h2>
                    <div className="mb-4 p-3 rounded-4"
                        style={{
                            background: "#4457b7",
                            color: "white",
                            fontSize: "40px",
                            fontWeight: "bold",
                            letterSpacing: "3px"
                        }}
                    >
                        {formatTime()}
                    </div>

                    <div className="d-flex justify-content-center gap-3">
                        <button className="btn btn-success px-4 fw-bold stopwatch-btn"  onClick={() => setRunning(true)}>Start</button>
                        <button className="btn btn-danger px-4 fw-bold stopwatch-btn" onClick={() => setRunning(false)}>Stop</button>
                        <button className="btn btn-info px-4 fw-bold stopwatch-btn" onClick={() => {
                            setRunning(false);
                            setTime(0);}}>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseEffectStopWatch