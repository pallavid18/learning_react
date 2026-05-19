// export const Function_Example =() =>{

//     function getName(){
//         return "Pallavi"
//     }

//     return(
//         <>
//             <div className="container">
//                 <h1>Function Example</h1>
//                 <h2>Hello User {getName()}</h2>
//             </div>
//         </>
//     )
// }
// export default Function_Example;

// const Function_Example =() =>{
//     const getName = (yourname) => {
//         return yourname;
//     }
//     const name="Pallavi";
//     const name1="Disha";

//     return(
//         <>
//         <h1>Using Parameterized Function</h1>
//         <h2>Hello {getName(name)}</h2>
//         <h2>Hello {getName(name1)}</h2>
//         </>
//     )
// }

const Function_Example =()=>{
    const add =(a,b) =>{
        return a+b;
    }

    return(
        <>
        <div className="container">
            <h1>Addition Example</h1>
            <h2>10 + 20 ={add(10, 20)}</h2>
            <h2>40 + 50 ={add(40,50)}</h2>
        </div>
        </>
    )
}
export default Function_Example;
