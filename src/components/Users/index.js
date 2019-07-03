// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './user.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const stateMap = store => ({
});


class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showAlbum: false,
      usersAlbum: [],
    };
  }
  componentWillMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
          console.log(json);
          this.setState({users: json})
        })
  }
  
  render() {
    return (
      <div>
          <label className="dropdown">
              <div className="dd-button">
                Users
              </div>
              <input type="checkbox" className="dd-input" id="test" />
              <ul className="dd-menu">
                {this.state.users.map((user) => <Link to={`/albums/${user.id}`} key={user.id}>{user.name}</Link> )}
              </ul>
          </label>
      </div>
    );
  }
}

// export default Users;
export default connect(stateMap)(Users);
