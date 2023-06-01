import pic1 from '../static/read1.png'

interface CarProp{
    name: string
    year: number
    selling_price: number
}

export default function CarDetail(props:CarProp){

    return(
        <>  
        <div className="reviewFullRow flexMeRow">
            <div className="reviewImage">
                <img className='reviewPic' src={pic1} alt="" />
            </div>
            <div className="reviewText">
            <h4>{props.name}</h4>
            <h5>{props.year}</h5>
            <p>{props.selling_price}</p>
            
            </div>
        </div>
        
        </>
    )

}