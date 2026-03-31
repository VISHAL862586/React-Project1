import { useNavigate } from "react-router-dom";
import './Header.css'
function Header(){
      const navigate = useNavigate();
    return(
        <>
        <div className="header">
            <h2>Complaint</h2>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Complaint</li>
                    <li>History</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div>        
                <button  onClick={() => navigate("/login")} >Login</button>
                <button onClick={() => navigate("/register")}> Register</button>
            </div>
        </div>   
        </>
    )
}

export default Header;