import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="breed">Search Employee By Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="person"
          list="persons"
          type="text"
          className="form-control"
          placeholder="John Smith..."
          id="person"
        />
        {/* <datalist id="persons">
          {props.persons.map(person => (
            <option value={person} key={person} />
          ))}
        </datalist> */}
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-outline-light">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
