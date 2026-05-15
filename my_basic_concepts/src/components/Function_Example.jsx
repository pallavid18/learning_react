export const Function_Example =() =>{

    function getName(){
        return "Pallavi"
    }

    return(
        <>
            <div className="container">
                <h1>Function Example</h1>
                <h2>Hello User {getName()}</h2>
            </div>
        </>
    )
}
// export default Function_Example;