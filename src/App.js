import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/data/contactlist.json")
      .then(response => response.json())
      .then(contacts => this.setState({ contacts }));
  }
  render() {
    const { contacts } = this.state;
    console.log(this.state.contacts);

    return (
      <div className="contactlist">
        <h1>Contact List</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.surname}</td>
                <td>{contact.phone}</td>
                <td><button>Toggle favorite</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
