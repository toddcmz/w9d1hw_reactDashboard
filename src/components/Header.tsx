import { NavLink } from 'react-router-dom'
import LoginFields from './LoginFields'

export default function Header(){
    
    return(
        <header className="headerContainer flexMeRow">
            <div className="pageTitle"> 
                <NavLink to='/'>Great Reads</NavLink>
            </div>
            <div className="loginContainer">
                <LoginFields/>
            </div>
            <div className="navButtonContainer flexMeRow">
                <div className="navButton">
                <NavLink to='/staticReviews'>Static Reviews</NavLink>
                </div>
                <div className="navButton">
                <NavLink to='/carDetails'>allCarDetails</NavLink>
                </div>
                <div className="navButton">Wishlist</div>
                <div className="navButton">Logout</div>
            </div>
        </header>
    )
}