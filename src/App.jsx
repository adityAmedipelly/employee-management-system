import { useEffect } from 'react'
import Login  from './components/Auth/Login'
import { getLocalStorge, setLocalStorge } from './utils/localStorage'
// import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'

// import AdminDashboard from "./components/Dashboard/AdminDashboard"

function App(){
const [user,setUser] = useState(null)

const handleLogin = (email) =>{
  
}
  return(
    <>
   {!user ?  <Login/> : " " }
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App