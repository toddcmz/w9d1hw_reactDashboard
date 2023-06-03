import { useRef, useState } from "react"
import CarDetail, { CarProp } from "../components/CarDetail"
import { useNavigate } from "react-router-dom"


export default function CustomCars(){

    // set up empty array to hold car data
    const [carArray, setCarArray] = useState<CarProp[]>([])
    const carNameField = useRef<HTMLInputElement>(null)
    const carYearField = useRef<HTMLInputElement>(null)
    const carPriceField = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    function handleCollectCarForm(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const currentCarArray = carArray
        currentCarArray.push({
            name: carNameField.current?.value || '',
            year:Number(carYearField.current?.value),
            selling_price:Number(carPriceField.current?.value)
        })
        setCarArray(currentCarArray)
        navigate('/myCustomCars')
    }

    return(
        <>
            <h2>Add a Car to your Collection</h2>
            <form onSubmit={handleCollectCarForm}>
                <input type="text" placeholder = 'Car Name' ref={carNameField}/>
                <input type="text" placeholder = 'Car Year' ref={carYearField}/>
                <input type="text" placeholder = 'Selling Price' ref={carPriceField}/>
                <button className = 'collectCarButton'>Add Car</button>
            </form>
            <br />
            <br />

            <h2>Your Car Collection</h2>
            {carArray.map((car)=>{
                return(
                    <> 
                        <div className="reviewContainer"> 
                        <CarDetail name={car.name} year={car.year} selling_price = {car.selling_price}/>
                        </div>
                        <br /> 
                    </>
                )
            })}
        </>
    )
}