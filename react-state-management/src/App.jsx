import MultiInputFileHandling from './components/MultiInputFileHandling'
import UseEffectCounter from './components/UseEffectCounter'
import UseEffectCuurentTime from './components/UseEffectCuurentTime'
import UseEffectImageApi from './components/UseEffectImageApi'
import UseEffectJavaRestApi from './components/UseEffectJavaRestApi'
import UseEffectStopWatch from './components/UseEffectStopWatch'
import UseEffectUserListApi from './components/UseEffectUserListApi'
import UseSateWithPropsHw from './components/UseSateWithPropsHw'
import UseStateCounter from './components/UseStateCounter'
import UseStateInputEx from './components/UseStateInputEx'
import UseStateSimpleFormHandling from './components/UseStateSimpleFormHandling'
import UseStateWithArray from './components/UseStateWithArray'
import UseStateWithBoolean from './components/UseStateWithBoolean'
import UseStateWithHideShowPassword from './components/UseStateWithHideShowPassword'
import UseStateWithProps from './components/UseStateWithProps'

function App() {


  return (
    <>
    <h1>Welcome to Use State & Use Effect Management</h1>
    <hr/>
    <UseStateCounter/>
    <hr/>
    <UseStateInputEx/>
    <hr/>
    <UseStateWithBoolean/>
    <hr/>
    <UseStateWithArray/>
    <hr/>
    <UseStateWithHideShowPassword/>
    <hr/>
    <div className="container" style={{ border: "1px solid blue", borderRadius: "5px", padding: "10px" }}>
      
      <div className="row">
        <div className="col-md-4">
          <h5>UseState With Props</h5>
          <UseStateWithProps 
          name="Rose" 
          price={2041}/>

        </div>
        <div className="col-md-4">
          <h5>UseState With Props</h5>
          <UseStateWithProps 
          name="Sunflower" 
          price={3041}/>
        </div>
        <div className="col-md-4">
          <h5>UseState With Props</h5>
          <UseStateWithProps 
          name="Lilly" 
          price={5041}/>
        </div>
      </div>
    </div>
    <hr/>
    <div className="container" style={{ border: "1px solid blue", borderRadius: "5px", padding: "10px" }}>
      <h5>Post</h5>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <UseSateWithPropsHw title="Coding Life" image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"/>
          </div>
          <div className="col-md-4">
            <UseSateWithPropsHw title="Beautiful Nature" image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"/>
          </div>
          <div className="col-md-4">
            <UseSateWithPropsHw  title="Delicious Pizza" image="https://images.unsplash.com/photo-1513104890138-7c749659a591"/>
          </div>
        </div>
      </div>
    </div>
    <hr/>
    <UseEffectCounter/>
    <hr/>
    <UseEffectUserListApi/>
    <hr/>
    <UseEffectImageApi/>
    <hr/>
    <UseEffectCuurentTime/>
    <hr/>
    <UseEffectStopWatch/> 
    <hr/>
    <UseEffectJavaRestApi/>
    <hr/>
    <UseStateSimpleFormHandling/>
    <hr/>
    <MultiInputFileHandling/> 
    </>
  )
}

export default App
