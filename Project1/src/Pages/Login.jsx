import "./Account.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Login Success");
    setShowPopup(true);

    setTimeout(() => {
    setShowPopup(false);
    navigate("/");
    }, 2000);
    
  }
  return (
    <div className="user-container">
    <form className="user-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input className="user-input" type="email" placeholder="Email" />
        <input className="user-input" type="password" placeholder="Password" />

        <button className="user-btn">Login</button>

        <p className="user-text">
        Don’t have an account?  <span className="user-link"  onClick={() => navigate("/register")}>Register</span>
        </p>
    </form>
      {}
      {showPopup && (
        <div className="popup">
        Login Successfully ✅
        </div>
      )}
    </div>
  )
}

export default Login;