import { useState } from 'react'
import reactLogo from './assets/react.svg'
import img1 from './assets/vite.svg'
import hero from './assets/hero.png'
import Function_Example from './components/Function_Example'
import Event_Example from './components/Event_Example'
import UserCard from './components/Object_Example'
import FruitList from './components/Array_Example'
import Conditional_Statement from './components/Conditional_Statement'
import Message_Props from './components/Message_Props'
import { Student_Props, PassingBoolean, PassingObject, PassingArray } from './components/Student_Props'
import Cards_Props from './components/Cards_Props'
import {According_Props, PassingFunction, PassingImage} from './components/According_Props'



function App() {

  const student = { name: "Pallavi ", age: 20, city: "Pune" }; // This is an object named student that contains three properties: name, age, and city. It represents a student's information.
  const Student1 = { name: "Mayuri", age: 21, city: "Pune" }; // This is another object named Student1 with similar properties.

  const subjects = ["HTML", "CSS", "JAVA", "PYTHON", "MERN"]; // This is an array named subjects that contains a list of strings representing different subjects. It can be used to display or manipulate the list of subjects in the application.
  const ShowAlert=()=>{alert("Hello From Parent");};  // This is a function named ShowAlert that displays an alert message "Hello From Parent" when called. It can be passed as a prop to child components to trigger the alert from within those components.

  return (
    <>
      <h1>Welcome to Basic Concept </h1>
      <hr />
      {/* <Function_Example/> */}
      {/* <Event_Example/> */}
      {/* <UserCard/> */}
      <FruitList/>
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

{/* <div
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
</div> */}

      <hr />
      <div className="container" style={{ border: "1px solid blue", borderRadius: "5px", padding: "10px" }}>
        <div
          className="container mt-2"
          style={{
            backgroundColor: "#f8f9fa",
            padding: "30px",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#0d6efd",
              marginBottom: "10px",
              fontWeight: "bold"
            }}
          >
            Accordion Using Props
          </h1>

          <hr />

          <div className="accordion" id="accordionExample">

            <According_Props
              id="1"
              title="React"
              contains="React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components."
            />

            <According_Props
              id="2"
              title="Spring Boot"
              contains="Spring Boot is a Java framework used for developing REST APIs and microservices quickly with minimal configuration."
            />

            <According_Props
              id="3"
              title="Bootstrap"
              contains="Bootstrap is a CSS framework used to create responsive and attractive web designs easily."
            />

          </div>
        </div>
      </div>
      <hr/>

{/* Passing the Function*/ }
      <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}}>
        <h5>Passing Function as a Props</h5>
        <PassingFunction clickMe={ShowAlert}/>
      </div>
      <hr/>
      <div className="container" style={{border:"1px solid blue",borderRadius:"5px",padding:"10px"}} >
        <PassingImage photo={reactLogo}/>
        <PassingImage photo={img1}/>
        <PassingImage photo={hero}/>
      </div>

    </>
  )
}

export default App
