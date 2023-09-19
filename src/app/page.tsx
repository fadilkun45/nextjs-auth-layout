/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { AuthContext, AuthContextType } from "@/Auth/AuthContext"
import { useRouter } from 'next/navigation'
import { useContext, useEffect } from "react"

export default function Home() {
  const router = useRouter()
  const { login, setLogin } = useContext(AuthContext) as AuthContextType

  const handleLogin = () => {
    setLogin("1")
    localStorage.setItem("auth-fake", "1")
    router.push("/dashboard")
  }

  useEffect(() => {
    if (login === "1") {
      router.push("/dashboard")
    }
  }, [])

  return (
    <div className='bg-gray-100 cursor-pointer text-center w-1/12 mx-auto px-3 py-4' onClick={handleLogin}>Login</div>
  )
}
