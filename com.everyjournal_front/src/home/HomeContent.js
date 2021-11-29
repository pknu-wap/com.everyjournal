import React, { Component } from 'react';
import CreatePastJournal from './journal/CreatePastJournal';

import CreateTargetJournal from './journal/CreateTargetJournal';
import HomeJournals from './journal/HomeJournals';

class HomeContent extends Component {
    getHomeContent() {
        switch(this.props.mode) {
          // 로그인
          case 'create target':
            return(
              <CreateTargetJournal 
              onChangeMode={()=>this.props.onChangeMode('home')}
              onError={this.props.onError}
              id={this.props.id}
              />
              );
          // 가입
          // 홈화면
          case 'create past':
            return(
              <CreatePastJournal
              onChangeMode={()=>this.props.onChangeMode('home')}
              onError={this.props.onError}
              id={this.props.id}
              />
            );
          case 'home':
          default:
            return(
              <HomeJournals
              id={this.props.id}
              onError={this.props.onError}
              />
            );
        }
    }

    render() { 
        return this.getHomeContent();
    }
}

export default HomeContent;