import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      comments: "",
      radio: false,
      checkbox: false,
      select: "",
    };
  }

  // handles the change event for the name input field
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  // handles the change event for the email input field
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  // handles the change event for the radio button
  handleRadioChange = (event) => {
    this.setState({
      radio: event.target.checked,
    });
  };

  // handles the change event for the comments textarea
  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  // handles the change event for the checkbox input field
  handleCheckboxChange = (event) => {
    this.setState({
      checkbox: event.target.checked,
    });
  };

  // handles the change event for the select input field
  handleSelectChange = (event) => {
    this.setState({
      select: event.target.value,
    });
  };

  // handles the submit event for the form
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with the following data:");
    console.log('form-values:',this.state);
  };
  
  // handle change Generic Function
  handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
  }

  render() {
    const { name, email, comments, radio, checkbox, select } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        {/* Form Title */}
        <h1>Form Handling</h1>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.handleChange} // Controlled Component
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange} // Controlled Component
          />
        </div>

        {/* Text Area */}
        <div>
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={comments}
            onChange={this.handleChange} // Controlled Component
          />
        </div>

        {/* Radio Buttons */}
        <div>
          <label htmlFor="radio">Option 1</label>
          <input
            type="radio"
            id="option1"
            name="radio"
            value={!radio}
            onChange={this.handleChange} // Controlled Component
          />
        </div>

        {/* Checkbox */}
        <div>
          <label htmlFor="checkbox">Checkbox</label>
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            value={!checkbox}
            onChange={this.handleChange} // Controlled Component
          />
        </div>

        {/* Select */}
        <div>
          <label htmlFor="select">Select:</label>
          <select
            id="select"
            name="select"
            value={select}
            onChange={this.handleChange} // Controlled Component
          >
            <option value="default" disabled>
              Select an option
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        {/* Submit Button */}
        <div>
          <button type="submit">Submit</button>
        </div>
        {/* Reset Button */}
        <div>
          <button type="reset">Reset</button>
        </div>
      </form>
    );
  }
}

export default Form;
