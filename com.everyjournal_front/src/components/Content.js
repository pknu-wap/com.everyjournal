import React, { Component } from 'react';

import SignIn from './user/SignIn';
import SignUp from './user/SignUp';

import ErrorPage from './ErrorPage';

import Home from '../home/Home';

class Content extends Component {

    getContent() {
      if(this.props.id===null) { // 로그인 상태 아닐 때
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
              <SignIn 
              onSignIn={this.props.onSignIn}
              />
              );
        }
      } else { // 로그인 상태
        switch(this.props.mode) {
          // 홈화면
          case 'home':
          default:
            return(
                <Home 
                id={this.props.id}
                onError={()=>this.props.onChangeMode('error')}
                targetJournals={this.props.targetJournals}
                pastJournals={this.props.pastJournals}
                getJournals={this.props.getJournals}
                />
              );
          // 에러 화면
          case 'error':
            return(
              <ErrorPage></ErrorPage>
            );
        }
      }
    }

    render() { 
        return this.getContent();
    }
}

export default Content;