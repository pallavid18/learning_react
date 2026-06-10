import { useReducer } from "react";


//const [state, dispatch] = useReduccer(reducer, initinalState)
function reducer(state, action) {
    switch(action.type){
        case "INC" : 
        return{count : state.count + 1}; //increase count

        case "DEC" : 
        return {count : state.count -1}; //decrease count

        case "RESET" :
            return{count : 0}; //reset count 0

            default :
            return state; //if action type not found- return same state
    }
}

export default function CounterUseReducer(){
    const [state , dispatch] = useReducer(reducer,{count:0});
    return(
        <>
        <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
        <h5>Count : {state.count}</h5>
        <button className="btn btn-outline-info m-1" onClick={()=> dispatch({type: "INC"})}>Increment</button>
        <button className="btn btn-outline-info m-1" onClick={()=> dispatch({type: "DEC"})}>Descrement</button>
        <button className="btn btn-outline-info m-1" onClick={()=> dispatch({type: "RESET"})}>Rest</button>
        </div>
        </>
    )
}
