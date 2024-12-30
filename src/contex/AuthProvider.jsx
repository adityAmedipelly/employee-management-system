import { createContext, useEffect, useState } from "react"
import { getLocalStorge, setLocalStorge } from "../utils/localStorage"

 export const AuthContext = createContext()

function AuthProvider({children}) {

  
    const[ userData,  setUserData] = useState(null)
   
    useEffect(()=>{
        setLocalStorge()
    const {employees} = getLocalStorge()
     setUserData(employees) 
    },[])

  return (
    <div>
      <AuthContext.Provider value = {[userData,setUserData]}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
