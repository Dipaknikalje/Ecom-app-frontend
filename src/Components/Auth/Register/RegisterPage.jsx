import React,{useState} from 'react'
import './register.css'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Footer from '../../Footer/Footer'
// import { localRegister } from '../../UrlLinks/link'
const RegisterPage = () => {
    const [name,setName] = useState("")
    const [number,setNumber]=useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [responseData,setResponseData] = useState(null);
    const navigate = useNavigate()
    // const {dispatch} =useLogin()
    

  
    const handleName = (event) => {
      event.preventDefault();
      setName(event.target.value);
    };
    const handleNumber = (event) => {
      event.preventDefault();
      setNumber(event.target.value);
    };
    const handleEmail = (event) => {
      event.preventDefault();
      setEmail(event.target.value);
    };
    const handlePassword = (event) => {
      event.preventDefault();
      setPassword(event.target.value);
    };
    const registerUser = async (userData)=>{
      const api = "https://techdips-com.onrender.com/userdata/register"
      const response = await axios.post(api,userData)
      setResponseData(response.data)
      
      console.log(response.data)
      if(response.data.token){
        // dispatch({type:"USER" , payload:true})
        // window.alert("registered successfully")
        console.log(response.data.token)
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("loggedIn", true)
        localStorage.setItem("name",response.data.name)
      localStorage.setItem("number",response.data.number)
      localStorage.setItem("email",response.data.email)
      localStorage.setItem("userId",response.data.userId)
          navigate("/");
          console.log(responseData)
        
       
      }
      else{
        // window.alert("already registered")
        navigate('/login')
      }
  }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const userData = {
            name:name,
            number:number,
            email:email,
            password:password
        }
        setPassword("")
        setName("")
        setNumber("")
        setEmail("")
        registerUser(userData)
    }

  return (
    <>
    <div className="body">
      <div className="box">
        <span className="borderline"></span>
        <form>
          <h2>Register</h2>
          <div className="inputBox">
            <input
              type="text"
              name="name"
              required="required"
              value={name}
              onChange={handleName}
            />
            <span>Name</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="number"
              name="number"
              required="required"
              value={number}
              onChange={handleNumber}
            />
            <span>Mobile</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="email"
              name="email"
              required="required"
              value={email}
              onChange={handleEmail}
            />
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="password"
              name="password"
              required="required"
              value={password}
              onChange={handlePassword}
            />
            <span>Password</span>
            <i></i>
          </div>
         
          <button type="submit" value="submit" onClick={handleSubmit}>
            Register
          </button>
          <NavLink to="/login">Alreday Registered go to log in</NavLink>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default RegisterPage
