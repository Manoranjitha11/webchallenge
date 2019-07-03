// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../common.css';
import UserDetail from '../Users/userDetail.js';

const stateMap = store => ({
  users: store.users,
});


class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
  }

  fetchCall = async (props) => {
    let albumId = props === undefined ? this.props.location.pathname.split("/")[2] : props.location.pathname.split("/")[2];
    let fetchURL = albumId === undefined ? 'https://jsonplaceholder.typicode.com/photos' : `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
    const response = await fetch(fetchURL);
    const json = await response.json();
    console.log(json);
    this.setState({photos: json});
  }

  componentWillMount() {
    console.log(this.props.users)

    this.fetchCall();
   }

  componentWillReceiveProps(nextProps, nextState) {
    console.log(this.props.users)
    this.fetchCall(nextProps);
  }

  render() {
    return (
      <div>
        <UserDetail id={this.props.users.userId} component="photos" />
          <div className="cardOuterBox" >
            {this.state.photos.map((photo) =>
              <div key={photo.id} className="card">
                <img src={photo.thumbnailUrl} alt="Avatar"  />
                  <div className="container">
                    <p className="block-with-text"><b>Title:</b> {photo.title}</p>
                  </div>
                </div>
              )}
          </div>
      </div>
    );
  }
}

// export default Photos;
export default connect(stateMap)(Photos);
