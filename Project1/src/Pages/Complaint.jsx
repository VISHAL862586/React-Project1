import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Complaint.css";
function Complaint() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate(); 

  function handleImage(e) {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  }

  function handleSubmit(e) {
  e.preventDefault();

  console.log("Complaint Submitted");

  setShowPopup(true);

  // after 2.5 sec → redirect to home
  setTimeout(() => {
        setShowPopup(false);
        navigate("/");
        }, 2500);
 }
  

  return (
    <div className="complaint-container">
      <form className="complaint-form" onSubmit={handleSubmit}>
        <h2 className="complaint-title">Register Complaint</h2>

        <input
          className="complaint-input"
          type="text"
          placeholder="Complaint Title"
          required
        />

        <select className="complaint-input" required>
          <option value="">Select Category</option>
          <option>Garbage</option>
          <option>Water Supply</option>
          <option>Road Damage</option>
          <option>Electricity</option>
          <option>Other</option>
        </select>

        <textarea
          className="complaint-textarea"
          placeholder="Describe your issue..."
          rows="4"
          required
        ></textarea>

        <input
          className="complaint-input"
          type="text"
          placeholder="Location / Address"
          required
        />

        <select className="complaint-select">
          <option value="">Select Priority</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <input
          className="complaint-input"
          type="file"
          onChange={handleImage}
        />

        {/* Image Preview */}
        {preview && (
          <img src={preview} alt="preview" className="preview-img" />
        )}

        <button className="complaint-btn">Submit Complaint</button>
      </form>

      {/* Success Popup */}
      {showPopup && (
        <div className="popup">
          Complaint Submitted Successfully ✅
        </div>
      )}
    </div>
  );
}

export default Complaint;