import React, { Component } from 'react';

import SignIn from './user/SignIn';
import SignUp from './user/SignUp';

class Content extends Component {

    getContent() {
        switch(this.props.mode) {
          case 'sign in':
            return(
                <SignIn 
                onSignIn={this.props.onSignIn}
                />
              );
          case 'sign up':
            return(
                <SignUp/>
              );
          case 'home':
          default:
            return(
                <div>
                  HOME
                </div>
              );
            ;
        }
      }

    render() {
        return this.getContent();
    }
}

export default Content;