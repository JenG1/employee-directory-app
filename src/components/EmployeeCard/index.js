import React from 'react'
import "./style.css";

function EmployeeCard(props) {
  const { usernames } = props
  return (

    <div className="card center">
      <div className="content">
        <ul>
          {usernames.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;





