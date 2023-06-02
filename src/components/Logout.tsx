import { useContext, useEffect } from "react"
// import { AuthContext } from "../contexts/UserProvider"
import { useNavigate } from "react-router-dom"
import Spinner from "react-bootstrap/Spinner"
import { AuthContext } from "../module/UserProvider"
// import { AuthContext } from "../contexts/UserProvider"

export default function Logout() {

  const { setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(()=>{
    setUser({
      loggedIn:false,
      username:'',
      token:''
    })
    navigate('/login')
  })
  
  return <Spinner animation="border" />
}