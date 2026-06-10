import './App.css'
import TodoArrayLocalStorage from './components/TodoArrayLocalStorage'
import TodoCrud from './components/TodoCrud'
import SessionDemo from './components/SessionDemo'
import SessionLogout from './components/SessionLogout'
import CookiesExample from './components/CookiesExample'
//import AxiosFetchDataExample from './components/AxiosFetchDataExample'
import AxiosExCreateNewUser from './components/AxiosExCreateNewUser'
import CrudAxios from './components/CrudAxios'
import WithoutUseMemo from './components/WithoutUseMemo'
import WithUseMemo from './components/WithUseMemo'
import CounterUseReducer from './components/UseReducer'
// import Child from './components/Child'
import MessageProvider from './components2/MessageProvider'
import Child from './components2/Child'

function App() {
  

  return (
    <>
    <h1>Welcome to React</h1>
    <hr/>
    <TodoArrayLocalStorage/>
    <hr/>
    <TodoCrud/>
    <hr/>
    <SessionDemo/>
    <hr/>
    <SessionLogout/>
    <hr></hr>
    <CookiesExample/>
    {/* <hr/>
    <AxiosFetchDataExample/> */}
    <hr/>
    <AxiosExCreateNewUser/>
    <hr/>
    <CrudAxios/>
    {/* <hr/>
    <WithoutUseMemo/> */}
    {/* <hr/>
    <WithUseMemo/> */}
    <hr/>
    <CounterUseReducer/>
    {/* <hr/>
    <h4>Using Prop drilling</h4>
    <Child message = "Hello Pallavi"/> */}
    <hr/>
    <MessageProvider>
      <Child/>
    </MessageProvider>
    </>
  )
}

export default App
