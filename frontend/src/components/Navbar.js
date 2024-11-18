import { Link } from 'react-router-dom'
import ControlledSwitches from './NightModeToggle.js'

const Navbar = ({checked, onToggle}) => {
    return (
        <header>
            <div className="container" data-status={checked ? "dark" : "light"}>
                <Link to='/'>
                    <h1 id='homelink'data-status={checked ? "dark" : "light"}>Workout Tracker</h1>
                </Link>
                <ControlledSwitches checked={checked} onToggle={onToggle}/>
            </div>
        </header>
    )
}

export default Navbar