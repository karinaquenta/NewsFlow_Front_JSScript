import { useContext, useEffect } from "react"
// import { AuthContext } from "../contexts/UserProvider"

import Spinner from "react-bootstrap/Spinner"
import { AuthContext } from "../module/UserProvider"
import { useNavigate } from "react-router-dom"
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
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    navigate('/login')
  })
  
  return <Spinner animation="border" />
}