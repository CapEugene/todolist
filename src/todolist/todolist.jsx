import Navbar from '../navbar/navbar';
import './todolist.css';
import Task from '../task/task';

function MainPage() {

    

    return (
        <>
            <Navbar />
            <div className='flex-container'>

                <div className='task-create'>
                    <div className='buttons'>
                        <input></input>
                        <button>Add new task</button>
                    </div>
                </div>

                <div className='tasks-container'>

                </div>
            </div>
        </>
    );
}

export default MainPage;