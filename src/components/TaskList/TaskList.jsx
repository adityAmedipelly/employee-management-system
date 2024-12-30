import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";




function TaskList({ data }) {
  return (
    <div
      id="tasklist"
      className="h-[55%] flex overflow-x-auto items-center justify-start gap-5 flex-nowrap w-full py-5  mt-10 text-white"
    >
      {data.tasks.map((elem, idx)=>{

        if(elem.active){
          return <AcceptTask key = {idx}  data = {elem}/>
        }

        if(elem.newTask){
          return <NewTask  key = {idx} data = {elem}/>
        }

        if(elem.completed){
          return <CompleteTask  key = {idx} data = {elem}/>
        }

        if(elem.failed){
          return <FailedTask  key = {idx} data = {elem}/>
        }

      })}
      
    </div>
  );
}

export default TaskList;
