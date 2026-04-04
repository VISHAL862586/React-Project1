import { useState, useEffect } from "react";

import "./History.css";

function History() {

  const [filter, setFilter] = useState("All");
  const [sortType, setSortType] = useState("latest"); // ✅ NEW

  const [complaints, setComplaints] = useState([]);

 useEffect(() => {
    fetch("http://localhost:8080/api/complaints")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        console.log("DATA:", data);
        setComplaints(data || []);
      })
      .catch((err) => {
        console.error(err);
        setComplaints([]); // prevent crash
      });
  }, []);

  
  const filteredData = (complaints || [])
    .filter((item) => {
      return filter === "All" || item.status?.trim() === filter;
    })
    .sort((a, b) => {
      if (sortType === "latest") {
        return new Date(b.date) - new Date(a.date);
      } else {
        return new Date(a.date) - new Date(b.date);
      }
  });

  return (
    <div className="history-container">
      <h2 className="history-title">Complaint History</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Pending")}>Pending</button>
        <button onClick={() => setFilter("In Progress")}>In Progress</button>
        <button onClick={() => setFilter("Resolved")}>Resolved</button>
      </div>

      {/* ✅ Sort Buttons */}
      <div className="sort-buttons">
        <button onClick={() => setSortType("latest")}>Latest</button>
        <button onClick={() => setSortType("oldest")}>Oldest</button>
      </div>

      {/* Cards */}
      <div className="history-list">
        {filteredData.map((item) => (
          <div className="history-card" key={item.id}>
            <h3>{item.title}</h3>

            <p><strong>Category:</strong> {item.category}</p>

            {/* ✅ formatted date */}
            <p>
              <strong>Date:</strong>{" "}
              {new Date(item.date).toLocaleDateString()}
            </p>

            <p><strong>Priority:</strong> {item.priority}</p>

            <span className={`status ${item.status.replace(" ", "")}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
      {filteredData.length === 0 && (
        <p style={{ color: "white", textAlign: "center" }}>
          No complaints found
        </p>
      )}
    </div>
  );
}

export default History;