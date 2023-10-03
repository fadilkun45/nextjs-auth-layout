import { useNavigate } from "react-router-dom"
import { auth, provider } from "../../config/firebase-config"
import { signInWithPopup } from "firebase/auth"
import { useEffect } from "react"
import './style.css'

const Auth = () => {
    let navigate = useNavigate()

    const signInWithGoogle = async () => {
        const results = await signInWithPopup(auth, provider)
        const authInfo = {
            userID: results.user.uid,
            name: results.user.displayName,
            profilePhoto: results.user.photoURL,
            isAuth: true,
        }
        localStorage.setItem("Auth", JSON.stringify(authInfo))
        navigate("/expense-tracker")
    }

    useEffect(() => {
        if(localStorage.getItem("Auth")){
            navigate("/expense-tracker")
        }
    },[])

  return (
   <div className="login-page">
    <p>Sign in With Google to Continue</p>
    <button className="login-with-google btn" onClick={signInWithGoogle}>Sign In With Google</button>
   </div>
  )
}

export default Auth