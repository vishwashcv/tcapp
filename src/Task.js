export const Task = (props) => {
    
  return (
    <div className='list'  style={{backgroundColor: props.completed ? "green" : "white", color: props.completed ? "white" : "black"}}>
      <div className='taskstatement' >{props.taskName}</div>
      <div className="flex">
        <button className="button" onClick={() => {props.completedTask(props.id)}}>Compelete</button>
        <button className="button" onClick={() => {props.DeleteTask(props.id)}}>X</button>
        </div>
    </div>
  )
}

export default Task
