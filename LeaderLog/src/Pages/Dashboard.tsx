import React from 'react';

function Dashboard() {
    return (
      <div className="container mt-5">
        <h1 className="mb-4">Manager Dashboard</h1>
        <ul>
          <li>📝 View Team Attendance</li>
          <li>➕ Add/Remove Attendance Entries</li>
          <li>⬇️ Download Attendance Report (Excel)</li>
          <li>👤 View/Edit Profile</li>
        </ul>
      </div>
    );
  }
  

export default Dashboard;