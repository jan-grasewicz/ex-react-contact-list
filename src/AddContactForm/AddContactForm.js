import React, { Component } from "react";

class AddContactForm extends Component {
  state = {
    name: "",
    surname: "",
    phone: ""
  };

  handleOnChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleOnChangeSurname = e => {
    this.setState({
      surname: e.target.value
    });
  };
  handleOnChangePhone = e => {
    this.setState({
      phone: e.target.value
    });
  };

  AddContact = e => {
    e.preventDefault();
    const { name, surname, phone } = this.state;
    this.props.handleAddContact(name, surname, phone);
    this.setState({ name: "", surname: "", phone: "" });
  };

  render() {
    return (
      <form>
        <label>
          Name:
          <input value={this.state.name} onChange={this.handleOnChangeName} />
        </label>
        <label>
          Surname:
          <input
            value={this.state.surname}
            onChange={this.handleOnChangeSurname}
          />
        </label>
        <label>
          Phone:
          <input value={this.state.phone} onChange={this.handleOnChangePhone} />
        </label>
        <button onClick={this.AddContact}>Add contact</button>
      </form>
    );
  }
}

export default AddContactForm;
