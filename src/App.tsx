import React, {useState} from 'react';
import './App.css';
import {TaskItem} from "./TaskItem";

function App() {
    const [tasks, setTasks] = useState([
        {
            isCompleted: true,
            name: "Learn React with Ada"
        },
        {
            isCompleted: false,
            name: "Learn Hooks"
        },
        {
            isCompleted: true,
            name: "Keep on Keeping on"
        }
    ]);
    const handleTaskChange = (index:number) => () => {
        console.log("changed!" + index);
        const arr = [...tasks];
        arr[index].isCompleted = !arr[index].isCompleted;
        setTasks(arr);
    };
    return (
        <main>
            <form>
                <input type="text" placeholder="Task"/>
                <button>Create Task</button>
            </form>
            <ul>
                {tasks.map((task, index:number)=> {
                    return (
                        <TaskItem taskName={task.name} isChecked={task.isCompleted} onTaskChange={handleTaskChange(index)}/>
                    );
                })}
            </ul>
        </main>
    );
}

export default App;
