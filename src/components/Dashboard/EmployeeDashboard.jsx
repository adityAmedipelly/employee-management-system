import  { useContext, useEffect } from 'react'
import Header from '../../other/Header'
import TaskListNumber from '../../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../contex/AuthProvider'

function EmployeeDashboard({ changeUser,data}) {
 
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {
    if (userData) {
      const updatedEmployee = userData.find(emp => emp.id === data.id)
      if (updatedEmployee) {
        const updatedData = { role: "employee", data: updatedEmployee }
        localStorage.setItem('loggedInUser', JSON.stringify(updatedData))
      }
    }
  }, [userData, data.id])

  const currentEmployeeData = userData?.find(emp => emp.id === data.id) || data

  return (
    <div className='min-h-screen bg-[#0a0a0a] p-6 md:p-10'>
      <Header data={currentEmployeeData} changeUser={changeUser} />
      <TaskListNumber data={currentEmployeeData} />
      <TaskList data={currentEmployeeData} />
    </div>
  )
}

export default EmployeeDashboard
