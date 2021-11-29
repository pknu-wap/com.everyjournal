import React, { Component } from 'react';

import CreateTargetJournal from './journal/CreateTargetJournal';

class HomeContent extends Component {
    getHomeContent() {
        switch(this.props.mode) {
          // 로그인
          case 'create target':
            return(
              <CreateTargetJournal />
              );
          // 가입
          // 홈화면
          case 'home':
          default:
            return(
              <div>home home</div>
            );
        }
    }

    render() { 
        return this.getHomeContent();
    }
}

export default HomeContent;