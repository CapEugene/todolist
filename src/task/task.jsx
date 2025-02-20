import './task.css';

function Task({ task }) {
    return (
        <>
            <div className="task-container">
                <h1 className='tasktitle-style'>Номер {task.id}</h1>
                <h2 className='taskinfotitle-style'>Описание задачи:</h2>
                <p className='taskinfo-style'>{task.taskinfo}</p>
            </div>
        </>
    );
}

export default Task;