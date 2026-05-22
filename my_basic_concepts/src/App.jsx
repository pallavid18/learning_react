import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Function_Example from './components/Function_Example'
import Event_Example from './components/Event_Example'
import UserCard from './components/Object_Example'
import FruitList from './components/Array_Example'
import Conditional_Statement from './components/Conditional_Statement'
import Message_Props from './components/Message_Props'
import {Student_Props, PassingBoolean, PassingObject, PassingArray  } from './components/Student_Props'
import Cards_Props from './components/Cards_Props'



function App() {

const student ={name:"Pallavi ", age : 20, city:"Pune"};
const Student1 ={name : "Mayuri", age:21, city: "Pune"};

const subjects =["HTML", "CSS","JAVA","PYTHON","MERN"];

  return (
    <>
    <h1>Welcome to Basic Concept </h1>
    <hr/>
    {/* <Function_Example/> */}
    {/* <Event_Example/> */}
    {/* <UserCard/> */}
    {/* <FruitList/> */}
    {/* <Conditional_Statement/> */}

    <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
      <h2>Passing String As Props</h2>
      <hr/>
      <Message_Props text="Hello, this is a message passed as a prop!" />
      <Message_Props text="Welcome to React Props Example!" />
    </div>
    <hr/>

    <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
      <h2 >Passing Object As Props</h2>
      <hr/>
      <Student_Props name="John Doe" age={20} city="New York" />
      <Student_Props name="Jane Smith" age={25} city="Los Angeles" />
    </div>
    <hr/>

    <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
      <h2>Passing Boolean as Props</h2>
      <hr/>
      <PassingBoolean isAdmin={true}/>
    </div>
    <hr/>

    <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
      <h2>Passing Object As Props</h2>
      <hr/>
      <PassingObject info={student}/>
      <PassingObject info={Student1}/>
    </div>
    <hr/>

    <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
      <h2>Passing Array as Props</h2>
      <hr/>
      <PassingArray list={subjects}/>
    </div>

<div
  className="container"
  style={{
    border: "2px solid #4CAF50",
    borderRadius: "20px",
    padding: "30px",
    background: "linear-gradient(to right, #fdfbfb, #ebedee)",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    marginTop: "40px"
  }}
>
  
  <h1
    style={{
      textAlign: "center",
      marginBottom: "30px",
      color: "#333",
      fontWeight: "bold"
    }}
  >
    Beautiful Flowers
  </h1>

  <div className="row g-4">

    <div className="col-md-4 d-flex justify-content-center">
      <Cards_Props
        title="Rose"
        text="This is a beautiful rose."
      />
    </div>

    <div className="col-md-4 d-flex justify-content-center">
      <Cards_Props
        title="Sunflower"
        text="This is a beautiful sunflower."
      />
    </div>

    <div className="col-md-4 d-flex justify-content-center">
      <Cards_Props
        title="Tulip"
        text="This is a beautiful tulip."
      />
    </div>

  </div>
</div>

    </>
  )
}

export default App
