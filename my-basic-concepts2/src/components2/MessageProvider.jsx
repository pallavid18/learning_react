import React from 'react'
import MyContext from './MyContext'

const MessageProvider = ({children}) => {

    const message = "Hello Students.....!!"
    const age = 12;

    return (
        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
            <h5>MessageProvider</h5>
            <MyContext.Provider value={[message , age]}>
                {children}
            </MyContext.Provider>
        </div>
    )
}

export default MessageProvider