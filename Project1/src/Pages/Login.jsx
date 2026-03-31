import "./Account.css";
function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Register clicked");
  }

  return (
    <div className="user-container">
    <form className="user-form">
        <h2>Login</h2>

        <input className="user-input" type="email" placeholder="Email" />
        <input className="user-input" type="password" placeholder="Password" />

        <button className="user-btn">Login</button>

        <p className="user-text">
        Don’t have an account? <span>Register</span>
        </p>
    </form>
    </div>
  )
}

export default Login;