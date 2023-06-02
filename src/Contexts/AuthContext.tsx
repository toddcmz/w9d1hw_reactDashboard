import { useState, createContext } from 'react'

interface UserContext{
    user: User
    setUser: React.Dispatch<React.SetStateAction<User>>
}

interface User{
    username: string
    loggedIn:boolean
}

export const AuthContext = createContext<UserContext>({}as UserContext)

// we create a provider and wrap the provider around our application.

export function AuthProvider({ children }:{ children: JSX.Element | JSX.Element[] }){
    
    const[user, setUser] = useState<User>({username:"", loggedIn:false})

    const value = {
        user,
        setUser
    }

    return(<AuthContext.Provider value={value}>{children}</AuthContext.Provider>)
}