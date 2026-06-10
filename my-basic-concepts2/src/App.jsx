import './App.css'
import TodoArrayLocalStorage from './components/TodoArrayLocalStorage'
import TodoCrud from './components/TodoCrud'
import SessionDemo from './components/SessionDemo'
import SessionLogout from './components/SessionLogout'
import CookiesExample from './components/CookiesExample'
//import AxiosFetchDataExample from './components/AxiosFetchDataExample'
import AxiosExCreateNewUser from './components/AxiosExCreateNewUser'
import CrudAxios from './components/CrudAxios'

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
    
    </>
  )
}

export default App
