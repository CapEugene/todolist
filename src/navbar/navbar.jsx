import './navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <h1>ToDoList</h1>
            <div className='buttons'>
                <button className='button'>Exit</button>
                <button className='button'>Profile</button>
            </div>
        </nav>
    );
}

export default Navbar;