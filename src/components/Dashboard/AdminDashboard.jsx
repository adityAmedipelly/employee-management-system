import AllTask from "../../other/AllTask"
import CreateTask from "../../other/CreateTask"
import Header from "../../other/Header"


function AdminDashboard({changeUser}) {
  return (
    <div className='min-h-screen bg-[#0a0a0a] p-6 md:p-10'>
        <Header changeUser={changeUser} />
        <CreateTask />
        <AllTask />
    </div>
)
}

export default AdminDashboard




     

