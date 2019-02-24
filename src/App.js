import React, { Component } from "react";
import Contact from "./Contact";
import "./App.css";

class App extends Component {
  state = {
    contacts: []
  };

  addContact = (name,surname,phone) => {
    this.setState({
      contacts: this.state.contacts.concat({
        id: Date.now(),
        name:name,
        surname:surname,
        phone:phone,
        isFavorite: false,
      }),
    });
  };


  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/data/contactlist.json")
      .then(response => response.json())
      .then(contacts => this.setState({ contacts }));
  }
  render() {
    const { contacts } = this.state;
    console.log(contacts);

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
              <Contact
                key={contact.id}
                name={contact.name}
                surname={contact.surname}
                phone={contact.phone}
                isFavorite={contact.isFavorite}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
