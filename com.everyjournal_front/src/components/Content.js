import React, { Component } from 'react';

import SignIn from './user/SignIn';
import SignUp from './user/SignUp';

class Content extends Component {

    getContent() {
        switch(this.props.mode) {
          // 로그인
          case 'sign in':
            return(
                <SignIn 
                onSignIn={this.props.onSignIn}
                />
              );
          // 가입
          case 'sign up':
            return(
                <SignUp/>
              );
          // 홈화면
          case 'home':
          default:
            return(
                <div>
                  HOME
                </div>
              );
          // 에러 화면
          case 'error':
            return(
              <div>
                <p>
                예기치 못한 에러가 발생하였습니다 ㅜㅜ
                </p>
              </div>
            );
        }
      }

    render() {
        return this.getContent();
    }
}

export default Content;