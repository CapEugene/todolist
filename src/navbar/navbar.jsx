import './navbar.css';

function Navbar() {

    function exit() {
        alert("Прост выход :)");
    }

    function profile() {
        alert("Прост профиль :)");
    }

    return (
        <nav className='navbar'>
            <h1>ToDoList</h1>
            <div className='buttons'>
                <button className='button' onClick={exit}>Exit</button>
                <button className='button' onClick={profile}>Profile</button>
            </div>
        </nav>
    );
}

export default Navbar;