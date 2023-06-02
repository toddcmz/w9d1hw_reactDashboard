import { NavLink } from 'react-router-dom'
import LoginFields from './LoginFields'
import { AuthContext } from '../Contexts/AuthContext'
import { useContext } from 'react'

export default function Header(){
    
    const {user} = useContext(AuthContext)
    // console.log(user.username)
    return(
        <header className="headerContainer flexMeRow">
            <div className="pageTitle"> 
                <NavLink to='/'>Great Reads</NavLink>
            </div>
            <div className="loginContainer">
                {user.username? <h4>User {user.username} logged in.</h4>:<LoginFields/>}
            </div>
            <div className="navButtonContainer flexMeRow">
                <div className="navButton">
                <NavLink to='/staticReviews'>Static Reviews</NavLink>
                </div>
                <div className="navButton">
                <NavLink to='/carDetails'>allCarDetails</NavLink>
                </div>
                <div className="navButton">
                    {user.username? <NavLink to='/myCustomCars'>Custom Car List</NavLink>:<p></p>}
                </div>
                <div className="navButton">
                    {user.username? <NavLink to='/logout'>Log out</NavLink>:<p></p>}
                </div>
            </div>
        </header>
    )
}