

export default function Header(){

    return(
        <>
        <header className="headerContainer flexMeRow">
            <div className="pageTitle"><h3>GreatReads</h3></div>
            <div className="navButtonContainer flexMeRow">
                <div className="navButton" >Sign In</div>
                <div className="navButton">Sign Up</div>
                <div className="navButton">Reviews</div>
                <div className="navButton">Wishlist</div>
                <div className="navButton">Logout</div>
            </div>
        </header>
        </>
    )
}