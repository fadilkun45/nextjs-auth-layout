"use client"
import { AuthContext, AuthContextType } from "@/Auth/AuthContext"
import { useRouter } from 'next/navigation'
import { useContext, useEffect } from "react"

const Layout = ({children}: {children: React.ReactNode}) => {
    
    const router = useRouter()
    const {login,setLogin} = useContext(AuthContext) as AuthContextType

    const handleLogout = () => {
        setLogin("0")
        localStorage.removeItem("auth-fake")
        router.push("/")
    }

    useEffect(() => {
    if(login === "0"){
        router.push("/")
    }
    },[])

  return (
    <div className='container mx-auto'>
        <button className='bg-gray-100 px-2 py-2 my-3 mx-5' onClick={handleLogout}>Logout</button>
        {children}
        </div>
  )
}

export default Layout