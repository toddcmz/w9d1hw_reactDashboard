import { useState, useEffect } from 'react'
import CarDetail, {CarProp} from '../components/CarDetail'
import { useParams } from 'react-router-dom'

const base_api_url = import.meta.env.VITE_APP_BASE_API

export default function SingleCar(){

    const { carId } = useParams() 
    // set up empty array to hold car data
    const [carArray, setCarArray] = useState<CarProp>({name: 'placeholder', year: 9999, selling_price: 1})

    useEffect(() =>{
        (async() =>{
            const res = await fetch(`${base_api_url}/${carId}`)
            if (res.ok){
                const data = await res.json()
                setCarArray(data)
            }
        })()
    },[])

    return(
        <>
        <h2>Info for car ID: {carId}</h2>
        <div className="reviewContainer"> 
            <CarDetail name={carArray.name} year={carArray.year} selling_price = {carArray.selling_price}/>
        </div>
        </>
    )

}