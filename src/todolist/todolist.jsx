import { useState, useEffect } from 'react';
import Navbar from '../navbar/navbar';
import './todolist.css';
import Task from '../task/task';

function MainPage() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks();
    }, []);
    
    const getTasks = () => {
        const retrievedTasks = [];
        for (let i = 1; i <= localStorage.length; i++) {
            const retrievedTask = JSON.parse(localStorage.getItem(i));
            retrievedTasks.push(retrievedTask.taskinfo);
        }
        setTasks(retrievedTasks);
    };

    const addTask = () => {
        if (document.getElementById("input").value == '') {
            alert("Строка пуста!");
        }
        else {
            const input = document.getElementById("input").value;

            const task = {
                id: localStorage.length + 1,
                taskinfo: input,
            };

            localStorage.setItem(task.id, JSON.stringify(task));
            setTasks([...tasks, input]);
            document.getElementById("input").value = '';
        }
    };

    const clearLocalStorage = () => {
        localStorage.clear();
        getTasks();
        alert("Выполнено!");
    };

    return (
        <>
            <Navbar />
            <div className='flex-container'>

                <div className='task-create'>
                    <div className='buttons'>
                        <input id="input"></input>
                        <button onClick={addTask}>Add new task</button>
                        <button onClick={clearLocalStorage}>Clear localStorage</button>
                    </div>
                </div>

                <ul className='tasks-container'>
                    {tasks.map((task, index) => (
                        <li className='list-container' key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default MainPage;