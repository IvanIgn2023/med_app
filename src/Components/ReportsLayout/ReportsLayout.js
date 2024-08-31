import React from 'react';
import './ReportsLayout.css';

const ReportsLayout = () => {
  const reports = [
    { serialNumber: '001', doctorName: 'Dr. James Brown', speciality: 'Cardiologist' },
    { serialNumber: '002', doctorName: 'Dr. Jameson Daniels', speciality: 'Neurologist' },
    { serialNumber: '003', doctorName: 'Dr. Sam Brown', speciality: 'Pediatrician' },
  ];

  return (
    <div className="reports-layout-wrapper">
      <div className="reports-layout">
        <h2>Your Reports</h2>
        <table className="reports-table">
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Doctor Name</th>
              <th>Speciality</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index}>
                <td>{report.serialNumber}</td>
                <td>{report.doctorName}</td>
                <td>{report.speciality}</td>
                <td>
                  <button>View Report</button>
                  <button>Download Report</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportsLayout;
