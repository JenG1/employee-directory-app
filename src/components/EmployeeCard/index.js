import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card center">
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Username:</strong> {props.username}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Location:</strong> {props.city}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;

