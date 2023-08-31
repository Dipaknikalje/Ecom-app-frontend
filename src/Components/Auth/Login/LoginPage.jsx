import React, { useState} from "react";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../Footer/Footer";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseData,setResponseData]=useState(null)
  const navigate = useNavigate();
  // const {dispatch}=useLogin()

  const emailHandler = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };
  const registerUser = async (userData)=>{
    const api = "https://techdips-com.onrender.com/userdata/login"
    const response = await axios.post(api,userData)
    setResponseData(response.data)
    
    console.log(response.data)
    if(response.data.token){
      // dispatch({type:"USER" , payload:true})
      // window.alert("login successfully")
      console.log(responseData)
      localStorage.setItem("token",response.data.token)
      localStorage.setItem("loggedIn", true)
      localStorage.setItem("name",response.data.userData.name)
      localStorage.setItem("userId",response.data.userData._id)



        navigate("/")
      
     
    }
    else{
      window.alert("invalid credential")
      navigate('/register')
    }
}

// useEffect(()=>{
//     if(responseData){
//         console.log(responseData)
//         console.log(responseData.token)
//         localStorage.setItem("token",responseData.token)
//         // localStorage.setItem("refreshToken",responseData.refreshToken)
        
//     }
// },[responseData])
  const submitHandler = (e) => {
    e.preventDefault()
    const userData = {
        email:email,
        password:password,

    }
    setPassword("")
    setEmail("")
    registerUser(userData)
}

  return (
    <>
    <div className="body">
      <div className="box">
        <span className="borderline"></span>
        <form>
          <h2>Log in</h2>
          <div className="inputBox">
            <input
              type="text"
              name="user-name"
              required="required"
              onChange={emailHandler}
              value={email}
            />
            <span>Email(as a userName)</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="password"
              name="password"
              required="required"
              onChange={passwordHandler}
              value={password}
            />
            <span>Password</span>
            <i></i>
          </div>
          <div className="links">
            <NavLink to="/forgot">Forgot Password</NavLink>
            <NavLink to="/register">Register</NavLink>
          </div>
          <button type="submit" value="login" onClick={submitHandler}>
            Log in
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default LoginPage;
