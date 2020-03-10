import React from 'react'
import "./style.css";

function EmployeeCard(props) {
  const { usernames } = props
  return (

    <div className="card center">
      <div className="content">
        <ul>
          {usernames.map(user => 
          <li key={user.id}>Name: {user.name} Age: {user.age} </li>
          )}
        </ul>
      </div>
    </div>
  );
}
export default EmployeeCard;





