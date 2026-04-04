import { useEffect, useState } from "react";
import "./Admin.css"; // ✅ VERY IMPORTANT

function Admin() {

  const [complaints, setComplaints] = useState([]);

  // 🔄 Fetch all complaints
  function loadComplaints() {
    fetch("http://localhost:8080/api/complaints")
      .then(res => res.json())
      .then(data => setComplaints(data || []))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    loadComplaints();
  }, []);

  // ✅ Update status
  function updateStatus(id, status) {
    fetch(`http://localhost:8080/api/complaints/${id}?status=${status}`, {
      method: "PUT"
    })
    .then(() => loadComplaints())
    .catch(err => console.error(err));
  }

  // ✅ Delete complaint
  function deleteComplaint(id) {
    fetch(`http://localhost:8080/api/complaints/${id}`, {
      method: "DELETE"
    })
    .then(() => loadComplaints())
    .catch(err => console.error(err));
  }

  return (
    <div className="admin-container">

      <h2 className="admin-title">Admin Dashboard</h2>

      <div className="admin-list">

        {complaints.map((c) => (
          <div className="admin-card" key={c.id}>

            <h3>{c.title}</h3>
            <p>{c.description}</p>
            <p><strong>Status:</strong> {c.status}</p>

            {/* ✅ DROPDOWN (modern UI) */}
            <select
              className="status-dropdown"
              value={c.status}
              onChange={(e) => updateStatus(c.id, e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>

            {/* ❌ DELETE BUTTON */}
            <button
              className="delete-btn"
              onClick={() => deleteComplaint(c.id)}
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Admin;