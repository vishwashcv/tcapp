import './App.css';
import { useState } from 'react';
import { Task } from './Task';
import Leftnav from './Leftside/Leftnav';

function App() {

  const [todoList, setTodoList] = useState([]);

  const [newTask, setNewTask] = useState("");

  const [counter, setCounter] = useState(0);

  const [bgColor, setBgColor] = useState("transparent");

  const getTask = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const Task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
      
    }

    setTodoList([...todoList, Task])  ///Spread operator extracts array to give direct value
  
  }

  const DeleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id))
  }

  const completedTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if(task.id === id) {
          return {...task, completed: true}
        }
        else {
          return task;
        }
      })
    )
  }

  
  
  return (
    <div className="App">
      <div className='flex-app'>

      <div className='50-width'>
              <div className="Title">Counter</div>
                          <div className='content-center'>
                          <div className='counter-number'>{counter}</div>
                          <div className='flex'>
                          <button className='counter-button' onClick={ () => {
                            setCounter(counter+1); 
                          }}>+</button>
                          <button className='counter-button' onClick={ () => {
                            setCounter(0); 
                          }}>Reset</button>
                          <button className='counter-button' onClick={ () => {
                            setCounter(counter-1); 
                          }}>-</button>
                          </div>
              </div>
      </div>


      <div className='50-width'>
           <div className="Title">todos</div>
            <div className='type-center'><input className='new-todo' placeholder='What needs to be done?' type='text' onChange={getTask} /><button className="button" onClick={addTask}>Add</button></div>
            <div className='test'>
                            <div>{todoList.map((task) => {
                            return <Task taskName={task.taskName} id={task.id} completed={task.completed} completedTask={completedTask} DeleteTask={DeleteTask}/>
                            })}</div>
                            </div>
             
      </div>
            
              
      </div>
      <div className="footer">
                    <p>Click add button to add a todo</p>
                    <p>Created by Vishwash C V</p>
                      </div>
    </div>
  );
}

export default App;
