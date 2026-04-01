import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Header />

      <section className="hero">
        <div className="hero-content">
          <h1>Register Your Complaint Easily</h1>
          <p>
            Report issues like garbage, water, roads and track status easily.
          </p>
          <button className="hero-btn" onClick={() => navigate("/complaint")}>
            Raise Complaint
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;