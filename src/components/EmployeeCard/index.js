import React from 'react'
import "./style.css";

function EmployeeCard(props) {
  const { usernames } = props
  return (

    <div className="card">
      <div className="content">
        <ul>
          {usernames.map(user => 
          <li key={user.id}><div>Name: {user.name}</div>Age: {user.age} </li>
          )}
        </ul>
      </div>
    </div>
  );
}
export default EmployeeCard;





