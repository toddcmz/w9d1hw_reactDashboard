import {useContext, useRef, useEffect } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function LoginFields(){

    const usernameField = useRef<HTMLInputElement>(null)
    const {user, setUser} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(()=>{
        if(user) navigate('/')
    },[user])


    function handleLoginForm(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        setUser({
            username: user.username,
            loggedIn:true
        })
    }

    
    if(user.username){
        return(
            <h4>User {user.username} logged in.</h4>
        )
    }else{
        return(
        <form onSubmit ={handleLoginForm}>
            <input type="text" placeholder="Username" ref={usernameField}/>
            <button className='logInButton'>Log In</button>
        </form>
        )
    }
    

}