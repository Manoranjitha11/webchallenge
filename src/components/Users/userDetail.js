// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './user.css';
const stateMap = store => ({
});


class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetail: null,
    };
  }

  fetchUser = async (props) => {
    let userId = this.props.id;
    if(userId !== undefined) {
        let fetchURL = `https://jsonplaceholder.typicode.com/users/${userId}`;
        const response = await fetch(fetchURL);
        const json = await response.json();
        console.log(json);
        this.setState({userDetail: json})
    }
}


  componentWillMount() {
    this.fetchUser();
  }

  componentWillReceiveProps(){
    console.log('userdetail11');
    this.fetchUser();
  }
  render() {
    return (
      <div>
          {this.state.userDetail == null ? '' :
          <div>
              <div className="cardUser">
                  <h1>{this.state.userDetail.name}</h1>
                  <p className="title">{this.state.userDetail.email}</p>
                  {/* <p> Address :  {this.state.userDetail.address}, {this.state.userDetail.address.city}</p> */}
                  <p><i className="fa fa-dribbble"></i> {this.state.userDetail.phone}</p>
                  <a href="#"><i className="fa fa-dribbble"></i></a> 
                  <a href="#"><i className="fa fa-twitter"></i></a> 
                  <a href="#"><i className="fa fa-linkedin"></i></a> 
                  <a href="#"><i className="fa fa-facebook"></i></a> 
                  <p><a href={this.state.userDetail.webiste}>Website</a></p>
              </div>
              <h3>{this.state.userDetail.name}'s {this.props.component}</h3>
          </div>
          }
      </div>
    );
  }
}

// export default Users;
export default connect(stateMap)(UserDetail);
