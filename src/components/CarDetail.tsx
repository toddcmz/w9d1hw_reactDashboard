import carPic from '../static/car.png'

export interface CarProp{
    name: string
    year: number
    selling_price: number
}

export default function CarDetail(props:CarProp){

    return(
        <>  
        <div className="reviewFullRow flexMeRow">
            <div className="reviewImage">
                <img className='carPic' src={carPic} alt="" />
            </div>
            <div className="reviewText">
            <h4>{props.name}</h4>
            <h5>{props.year}</h5>
            <p>${props.selling_price.toLocaleString()}</p>
            
            </div>
        </div>
        
        </>
    )

}