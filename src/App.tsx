import React, {useState} from 'react';
import './App.css';
import {TaskItem} from "./TaskItem";

interface NewTaskParams {
    name: any;
}

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
    const [textValue,setTextValue]=useState("");

    const handleTaskChange = (index:number) => () => {
        console.log("changed!" + index);
        const arr = [...tasks];
        arr[index].isCompleted = !arr[index].isCompleted;
        setTasks(arr);
    };

    const newTask = (name: string) =>{
        const newTask = {
            isCompleted: false,
            name: name,
        };

        setTasks([...tasks,newTask]);
    };

    const handleSubmit =(event: { preventDefault: () => void; })=>{
        event.preventDefault();
        console.log(textValue);
        newTask(textValue);
    };

    const handleTextChange = (event: { target: { value: any; }; })=>{
        const value =event.target.value;
        setTextValue(value);
    };
    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input value={textValue}
                       onChange={handleTextChange}
                       type="text" placeholder="Task"/>
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
