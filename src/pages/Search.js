import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import EmployeeCard from "../components/EmployeeCard";
import SearchForm from "../components/SearchForm";
class Search extends Component {
  state = {
    users: [],
    store: []
  };
  // When the component mounts, get a list of all available base breeds and update this.state.persons
  componentDidMount() {
    API.getEmployeeList()
    .then(json => json.data.results.map(result => (
      {
        name: `${result.name.first} ${result.name.last}`,
        id: result.registered,
        age: `${result.registered.age}`
      })))
    .then(newData => this.setState({users: newData, store: newData}))
    .catch(error => alert(error))
  }
  filterNames = event => {
    this.setState({users: this.state.store.filter(item => item.name.toLowerCase().includes(event.target.value.toLowerCase()))})
  };
  render() {
    const {users} = this.state
    return (
    <div>
    <Container style={{ minHeight: "40%" }}>
      <div className="Card">
        <div className="header">EMPLOYEE DIRECT</div>
        <SearchForm searchFunc= { event => this.filterNames(event)}/>
        <EmployeeCard usernames= {users} />
      </div>
    </Container>
    </div>
    );
  }
}

export default Search;
