"use client"


import { createContext, useState } from "react"

export type AuthContextType = {
    login?: string,
    setLogin: (arg: any) => void

}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({children}: {children: React.ReactNode}) => {

    const [login, setLogin] = useState(localStorage.getItem("auth-fake") || "")

  return (
    <AuthContext.Provider value={{login,setLogin}}>
        {children}
    </AuthContext.Provider>
  )
}

