import React from "react";
import "./style.css";
import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";

class Employee extends Component{
    state = {
        employees
      };

      componentDidMount() {
        API.getBaseBreedsList()
          .then(res => this.setState({ breeds: res.data.message }))
          .catch(err => console.log(err));
      }
    render(){
        return()
    } (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.picture} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.gender}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default Employee;
