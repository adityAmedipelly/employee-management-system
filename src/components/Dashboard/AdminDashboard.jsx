import AllTask from "../other/AllTask"
import CreateTask from "../other/CreateTask"
import Header from "../other/Header"


function AdminDashboard(props) {
  return (
    <div className="h-screen w-full p-10  text-white">
      <Header changeUser = {props.changeUser}/>
     <CreateTask/>
     <AllTask/>
    </div>
  )
}

export default AdminDashboard




     

