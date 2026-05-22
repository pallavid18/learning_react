// const Student_Props = (props) =>{
//     return(
//         <>
//         <div className="border border-success p-3 m-3 rounded">
//             <h5>Name : {props.name}</h5>
//             <h5>Age : {props.age}</h5>
//             <h5>City : {props.city}</h5>
//         </div>
//         </>
//     )
// }
// export default Student_Props;

// In the above code, we have defined a functional component called Student_Props that takes props as an argument. We are using destructuring assignment to extract the name, age, and city properties from the props object. This allows us to directly use these variables in our JSX without having to reference props.name, props.age, and props.city each time. The component then renders a div containing the student's name, age, and city in a styled format. Finally, we export the Student_Props component so that it can be imported and used in other parts of our application.

const Student_Props = ({name,age,city}) =>{
    return(
        <>
        <div className="border border-success p-3 m-3 rounded">
            <h5>Name : {name}</h5>
            <h5>Age : {age}</h5>
            <h5>City : {city}</h5>
        </div>
        </>
    )
}

const PassingBoolean =({isAdmin})=>{
    return(
        <>
        <div>
            <p>{isAdmin ? "Welcome, Admin!" : "Welcome, User!"}</p>
        </div>
        </>
    )
}

const PassingObject =({info})=>{
    return(
        <>
            <div>
                <div className="border border-success p-3 m-3 rounded">
                    <h5>Name : {info.name}</h5>
                    <h5>Age : {info.age}</h5>
                    <h5>City : {info.city}</h5>
                </div>
            </div>
        </>
    )
}

const PassingArray =({list}) =>{
    return(
        <>
        <ul>
            {list.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
        </>
    )
}

export { Student_Props , PassingBoolean ,PassingObject ,PassingArray};