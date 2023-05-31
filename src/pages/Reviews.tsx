import Review from '../components/Review'

export default function Reviews(){

    const review1 = {
        bookTitle: "Ender's Game",
        author: 'Orson Scott Card',
        review: 'A riveting tale of a box of nuts that finds its way into a space station.'
    }

    const review2 ={
        bookTitle: 'Piranesi',
        author: 'Susana Clarke',
        review: 'Is the ocean even real? This is question for which the reader may or may not find an answer by book end.'
    }

    const review3 ={
        bookTitle: 'All Systems Red',
        author: 'Martha Wells',
        review: 'Seek now and ye shall find a bit of circuitry in my mind.'
    }

    const reviewArray = []
    reviewArray.push(review1, review2, review3)
    return(
        <>
        <h2>My Reviews</h2>
        {reviewArray.map((review)=>{
            
                return(<> <div className="reviewContainer"> 
                            <Review bookTitle={review.bookTitle} author={review.author} review = {review.review}/>
                        </div>
                        <br /> </>
                )
            
        })}
        </>
    )

}