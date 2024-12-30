import Header from "../other/Header"
import TaskListNumber from "../other/TaskListNumber"
import TaskList from "../TaskList/TaskList"

function EmployeeDashboard({ changeUser,data}) {
 
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header changeUser={changeUser} data = {data}/>
      <TaskListNumber changeUser={changeUser} data = {data}/>
      <TaskList changeUser={changeUser} data = {data}/>
    </div>
  )
}

export default EmployeeDashboard
