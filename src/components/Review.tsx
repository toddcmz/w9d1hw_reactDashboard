import pic1 from '../static/read1.png'

interface ReviewProp{
    bookTitle: string
    author: string
    review: string
}

export default function Review(props:ReviewProp){

    return(
        <>  
        <div className="reviewFullRow flexMeRow">
            <div className="reviewImage">
                <img className='reviewPic' src={pic1} alt="" />
            </div>
            <div className="reviewText">
            <h4>{props.bookTitle}</h4>
            <h5>{props.author}</h5>
            <p>{props.review}</p>
            
            </div>
        </div>
        
        </>
    )

}