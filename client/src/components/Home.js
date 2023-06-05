import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1 style={{ fontSize: "36px", marginBottom: "1.5rem" }}>
        Welcome to Tom Pepper's General Store!
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "2rem" }}>
        We are your one-stop shop for all your gardening needs. Whether you're
        a seasoned gardener or just getting started, our store offers a wide
        range of high-quality plants, seeds, and gardening supplies to help you
        create a vibrant and thriving garden.
      </p>
      <button
        onClick={() => navigate("./plant")}
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "18px",
          border: "none",
          backgroundColor: "#3498db",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Explore Our Inventory
      </button>
      <div style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "1rem" }}>
          Important Announcements
        </h2>
        <ul style={{ listStyleType: "none", padding: "0", margin: "0" }}>
          <li>
            <h3 style={{ fontSize: "18px", marginBottom: "0.5rem" }}>
              Tom Peppers will soon begin taking orders for chicks
            </h3>
          </li>
          <li>
            <h3 style={{ fontSize: "18px", marginBottom: "0.5rem" }}>
              Now taking orders for our heritage breed Turkeys
            </h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

