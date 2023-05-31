
interface ReviewProp{
    bookTitle: string
    author: string
    review: string
}

export default function Review(props:ReviewProp){

    return(
        <>  
        <h4>{props.bookTitle}</h4>
        <h5>{props.author}</h5>
        <p>{props.review}</p>
        <br />
        </>
    )

}