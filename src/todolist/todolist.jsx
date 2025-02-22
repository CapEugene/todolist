import { useState, useEffect } from 'react';
import Navbar from '../navbar/navbar';
import './todolist.css';
import Task from '../task/task';

function MainPage() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks();
    }, []);

    console.log(tasks);
    
    const getTasks = () => {
        const retrievedTasks = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const retrievedTask = JSON.parse(localStorage.getItem(key));
            if (retrievedTask) {
                retrievedTasks.push(retrievedTask);
            }
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
                isCompleted: false
            };

            localStorage.setItem(task.id, JSON.stringify(task));
            setTasks([...tasks, task]);
            document.getElementById("input").value = '';
        }
    };

    const clearLocalStorage = () => {
        if (localStorage.length == 0) {
            alert("LocalStorage пуст!");
            return;
        }

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
                        <button className='button' onClick={addTask}>Add new task</button>
                        <button className='button' onClick={clearLocalStorage}>Clear localStorage</button>
                    </div>
                </div>

                <ul className='tasks-container'>
                    {/* {tasks.map((task, index) => (
                        <li className='list-container' key={index}>{task}</li>
                    ))} */}
                    {tasks.map((task) => (
                        <Task key={task.id} task={task} />
                    ))}
                </ul>
            </div>
        </>
    );
}

export default MainPage;