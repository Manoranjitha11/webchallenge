// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import UserDetail from '../Users/userDetail.js';
import {setUserId} from '../../actions/userActions';

const stateMap = store => ({
  // users: store.users,
  // albums: store.albums,
});


class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  fetchCall = async (props) => {
    let userId = props === undefined ? this.props.match.params.userId : props.match.params.userId;
    this.props.dispatch(setUserId(userId));
    let fetchURL = userId === undefined ? 'https://jsonplaceholder.typicode.com/albums' : `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
    const response = await fetch(fetchURL);
    const json = await response.json();
    this.setState({albums: json});
  }

  componentWillMount() {
    this.fetchCall();
   }

  componentWillReceiveProps(nextProps, nextState) {
    this.fetchCall(nextProps);
  }


  render() {
    return (
      <div>
      <UserDetail id={this.props.match.params.userId} component="albums"/>
        <div className="cardOuterBox" >
          { this.state.albums.map((album) => 
              <div key={album.id} className="card cardSmall">
                <h2>ID : {album.id}</h2>
                <div className="container">
                  <p className="block-with-text albums"><b>Title:</b> {album.title}</p>
                </div>
                <div>
                  <Link to={`/photos/${album.id}`} key={album.id}>Choose Photos</Link>
                </div>
              </div>
          )}
        </div>
      </div>
    );
  }
}

// export default Albums;
export default connect(stateMap)(Albums);
