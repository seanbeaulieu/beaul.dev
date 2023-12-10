import React from "react";


export default function Contact() {
    return (
      <div className="text-gray-400 bg-gray-900 body-font min-h-screen">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <a
            href="https://www.linkedin.com/in/sean-beaulieu-9a9bb9196/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src="./linkedin.png"
              alt="linkedin logo"
              style={{ width: "450px", height: "450px", marginRight: "10px" }}
            />
          </a>
          <a
            href="mailto:seanlbeaulieu@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src="./mail.png"
              alt="mail logo"
              style={{ width: "450px", height: "450px", marginRight: "10px" }}
            />
          </a>
        </div>
      </div>
    );
  }