import React from "react";
import "../App.css";

const Card = ({ name, email, username, phone }) => (
  <div className="card">
    <h2 className="card-title">Name: {name}</h2>
    <p className="card-username">Username: {username}</p>
    <p className="card-email">Email: {email}</p>
    <p className="card-phone">Contact-Number: {phone}</p>
  </div>
);

export default Card;
