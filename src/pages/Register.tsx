import { useRef } from "react"
import { useNavigate } from "react-router-dom"


export default function Register(){

    const firstNameField = useRef<HTMLInputElement>(null)
    const lastNameField = useRef<HTMLInputElement>(null)
    const usernameField = useRef<HTMLInputElement>(null)
    const emailField = useRef<HTMLInputElement>(null)
    const passwordField = useRef<HTMLInputElement>(null)

    const navigate = useNavigate()

    async function handleRegisterForm(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()

        const res = await fetch('https://matrixmarvelassignment.onrender.com/api/newuser',{
            method:"POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                first_name: firstNameField.current?.value,
                last_name: lastNameField.current?.value,
                username: usernameField.current?.value,
                email: emailField.current?.value,
                password: passwordField.current?.value
            })
        })

        if(res.ok){
            const data = await res.json()
            console.log('testing register',data)
            navigate('/')
        }
    }
    
  return (
    <>
        <div>Register Here</div>
        <form onSubmit={handleRegisterForm}>
            <input type="text" placeholder="First Name" ref={firstNameField}/>
            <br /><br />
            <input type="text" placeholder="Last Name" ref={lastNameField}/>
            <br /><br />
            <input type="text" placeholder="User Name" ref={usernameField}/>
            <br /><br />
            <input type="email" placeholder="Email" ref={emailField}/>
            <br /><br />
            <input type="password" placeholder="Password" ref={passwordField}/>
            <br /><br />
            <button>Register</button>
        </form>
    </>
  )
}

