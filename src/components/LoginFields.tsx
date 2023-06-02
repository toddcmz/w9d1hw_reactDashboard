import {useContext, useRef, useEffect } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function LoginFields(){

    const usernameField = useRef<HTMLInputElement>(null)
    const {user, setUser} = useContext(AuthContext)
    const navigate = useNavigate()

    console.log(user.username)

    useEffect(()=>{
        if(user) navigate('/')
    },[user])

    

    function handleLoginForm(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        setUser({
            username: usernameField.current?.value || '',
            loggedIn:true
        })
    }

    
    return(
    <form onSubmit ={handleLoginForm}>
        <input type="text" placeholder="Username" ref={usernameField}/>
        <button className='logInButton'>Log In</button>
    </form>
    )

    

}