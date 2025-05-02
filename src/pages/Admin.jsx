import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css"; // optional styling file
import admin1 from "../assets/images/opet.jpg";
import admin2 from "../assets/images/din.jpg";
import admin3 from "../assets/images/latiao.jpg";
import admin4 from "../assets/images/raa.jpg";

const admins = [
  {
    id: 1,
    name: "latiao",
    age: 15,
    image: admin3,
    sosmed: "https://www.instagram.com/",
  },
  {
    id: 2,
    name: "opet",
    age: 200,
    image: admin1,
    sosmed: "https://www.instagram.com/opett4youu/?utm_source=ig_web_button_share_sheet",

  },
  // tambahkan data admin lainnya
  {
    id: 3,
    name: "Din",
    age: 19,
    image: admin2,
    sosmed: "https://www.instagram.com/4ldiin03?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    id: 3,
    name: "Raa",
    age: 190,
    image: admin4,
    sosmed: "https://www.instagram.com",
  },
];

const Admin = () => {
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <h2 className="admin-title">Daftar Admin</h2>
      <div className="admin-grid">
        {admins.map((admin) => (
          <div
            key={admin.id}
            className="admin-card"
            onClick={() => setSelectedAdmin(admin)}
          >
            <img src={admin.image} alt={admin.name} className="admin-image" />
          </div>
        ))}
      </div>

      {selectedAdmin && (
        <div className="admin-modal">
          <div className="modal-content">
            <button
              className="close-button"
              onClick={() => setSelectedAdmin(null)}
            >
              &times;
            </button>
            <img
              src={selectedAdmin.image}
              alt={selectedAdmin.name}
              className="modal-image"
            />
            <h3>{selectedAdmin.name}</h3>
            <p>Usia: {selectedAdmin.age} tahun</p>
            {selectedAdmin.sosmed && (
              <a
                href={selectedAdmin.sosmed}
                target="_blank"
                rel="noopener noreferrer"
                className="sosmed-link"
              >
                Socmed
              </a>
            )}
          </div>
        </div>
      )}
      <button className="back-button" onClick={() => navigate("/")}>
        ← Kembali ke Menu
      </button>
    </div>
  );
};

export default Admin;
