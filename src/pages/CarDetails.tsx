import { useState, useEffect } from 'react'
import CarDetail, {CarProp} from '../components/CarDetail'

const base_api_url = import.meta.env.VITE_APP_BASE_API

export default function CarDetails(){

    // set up empty array to hold car data
    const [carArray, setCarArray] = useState<CarProp[]>([])

    useEffect(() =>{
        (async() =>{
            const res = await fetch(`${base_api_url}`)
            if (res.ok){
                const data = await res.json()
                setCarArray(data)
            }
        })()
    },[])

    return(
        <>
        <h2>All Cars</h2>
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