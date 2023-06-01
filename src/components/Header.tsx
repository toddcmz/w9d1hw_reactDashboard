import { NavLink } from 'react-router-dom'

export default function Header(){


    
    return(
        <header className="headerContainer flexMeRow">
            <div className="pageTitle"> 
                <NavLink to='/'>Great Reads</NavLink>
            </div>
            <div className="navButtonContainer flexMeRow">
                <div className="navButton" >Sign In</div>
                <div className="navButton">Sign Up</div>
                <div className="navButton">
                <NavLink to='/staticReviews'>Static Reviews</NavLink>
                </div>
                <div className="navButton">
                <NavLink to='/flaskApiReviews'>Flask API Reviews</NavLink>
                </div>
                <div className="navButton">Wishlist</div>
                <div className="navButton">Logout</div>
            </div>
        </header>
    )
}