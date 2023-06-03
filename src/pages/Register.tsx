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
        // this is giving header Access-Control-Allow-Origin missing as an error, 
        // when tryign to hit my render-hosted marvel API, which doesn't make sense
        // to me, how are is the "same origin" policy getting hit here? Render 
        // should be hosted somehwere else, right? anyway, I can't seem to find the
        // answer to this one.
        // to fix it
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

