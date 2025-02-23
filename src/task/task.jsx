import { useState, useEffect } from 'react';
import './task.css';

function Task({ task }) {

    const [taskstatus, setTaskStatus] = useState(task.isCompleted);
    const [isReal, setIsReal] = useState(true);

    useEffect(() => {
        setTaskStatus(task.isCompleted);
        setIsReal(isReal);
    }, [task.isCompleted]);

    function changeTask() {
        if (task.isCompleted) {
            task.isCompleted = false;
            setTaskStatus(false);
            localStorage.setItem(task.id, JSON.stringify(task));
        }
        else {
            task.isCompleted = true;
            setTaskStatus(true);
            localStorage.setItem(task.id, JSON.stringify(task));
        }
    }

    function removeTask() {
        setIsReal(false);
        localStorage.removeItem(task.id);
    }

    return (
        <>
            {isReal ?
            <div className="task-container">
                <h1 className='tasktitle-style'>Задача №{task.id}</h1>
                <h2 className='taskinfotitle-style'>Описание задачи:</h2>
                <p className='taskinfo-style'>{task.taskinfo}</p>
                <div className='task-buttons'>
                    {taskstatus ?
                    <button className='task-button task-change-button-false' onClick={changeTask}>Выполнено</button> : <button className='task-button task-change-button-true' onClick={changeTask}>Не выполнено</button>}
                    <button className='task-button task-remove-button' onClick={removeTask}>Удалить</button>
                </div>
            </div>
            : ''}
        </>
    );
}

export default Task;