import CarDetail from '../components/CarDetail'

export default function CarDetails(){


    return(
        <>
        <h2>My Reviews</h2>
        {carArray.map((car)=>{
            
                return(<> <div className="reviewContainer"> 
                            <CarDetail name={car.name} year={car.year} selling_price = {car.selling_price}/>
                        </div>
                        <br /> </>
                )
            
        })}
        </>
    )

}