import "./Account.css";

function Register() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Register clicked");
  }

  return (
    <div className="user-container">
      <form className="user-form" onSubmit={handleSubmit}>
        <h2 className="user-title">Register</h2>

        <input className="user-input" type="text" placeholder="Full Name" required />
        <input className="user-input" type="email" placeholder="Email" required />
        <input className="user-input" type="password" placeholder="Password" required />

        <input className="user-input" type="tel" placeholder="Phone Number" required />

        <textarea className="user-textarea" placeholder="Address" rows="3" required></textarea>

        <button className="user-btn">Register</button>

        <p className="user-text">
          Already have an account? <span className="user-link">Login</span>
        </p>
      </form>
    </div>
  );
}

export default Register;