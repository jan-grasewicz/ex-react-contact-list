import React, { Component } from "react";

class Contact extends Component {

    state={
        favorite: this.props.isFavorite,
    }
  render() {
    const {name,surname,phone} = this.props
 
      console.log(this.state.favorite)
    return (
        <tr style={this.state.favorite?{background:'yellow'}:{}}>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{phone}</td>
        <td>
          <button>Toggle favorite</button>
        </td>
      </tr>
    );
  }
}

export default Contact;