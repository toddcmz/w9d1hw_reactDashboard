import { useContext, useEffect } from "react"
import { AuthContext } from "../Contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'

export default function Logout(){
 
    const {setUser} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(()=>{

        setUser({
            username:'',
            loggedIn:false
        })
        navigate('/')
    })
    
    return(
        <Spinner animation = 'border'/>
    )
}