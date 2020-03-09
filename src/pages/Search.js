import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import EmployeeCard from "../components/EmployeeCard";


class Search extends Component {
  state = {
    persons: []
  };

  // When the component mounts, get a list of all available base breeds and update this.state.persons
  componentDidMount() {
    API.getEmployeeList()
      .then(res => {
        const persons = res.data;
        this.setState({persons});
        console.log(persons);
  })

  }
  render() {
    return (
      <div>
        <Container style={{ minHeight: "40%" }}>
          <h1 className="text-center">Employee Direct</h1>
          {this.state.persons.map(person => (
            <EmployeeCard           />
          ))}
        </Container>
      </div>
    );
  }
}

export default Search;
