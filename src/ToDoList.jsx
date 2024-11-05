import React, { useState } from 'react'

function ToDoList() {
    const [tasks,setTasks]=useState([])
    const [newtasks, setnewTasks]=useState('')

    function inputChange(event){
        setnewTasks(event.target.value)
    }

    function addtasks(){

        if(newtasks.trim()!=="")
        setTasks(t=>[...t,newtasks])
        setnewTasks("")
    }

    function deleteTasks(index){
        const updatedtask= tasks.filter((element,i)=>i !==index);
        setTasks(updatedtask)
    }

    function movetaskUp(index){
        if(index>0){
            const updatedtask=[...tasks];
            [updatedtask[index],updatedtask[index-1]]=
            [updatedtask[index-1],updatedtask[index]]
            setTasks(updatedtask)
        }
    }

    function movetaskDown(index){
        if(index<tasks.length-1){
            const updatedtask=[...tasks];
            [updatedtask[index],updatedtask[index+1]]=
            [updatedtask[index+1],updatedtask[index]]
            setTasks(updatedtask)
        }
    }
  return (
    <div className='to-do'>
        <h1 className='todo-text'>To-Do List</h1>
        <input type="text" placeholder='Enter task here..' value={newtasks} onChange={inputChange}/>
        <button className='add-btn' onClick={addtasks}>ADD TASK</button>
        <ol>
            {tasks.map((task,index)=>
            <li key={index}>
                <span className='text'>{task}</span>
                <button className='delete-btn' onClick={()=>deleteTasks(index)}>DELETE</button>
                <button className='task-move' onClick={()=>movetaskUp(index)}>👆</button>
                <button className='task-move' onClick={()=>movetaskDown(index)}>👇</button>
            </li>
            )}
        </ol>
    </div>
  )
}

export default ToDoList