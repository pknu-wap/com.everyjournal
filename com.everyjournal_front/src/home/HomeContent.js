import React, { Component } from 'react';
import CreatePastJournal from './journal/CreatePastJournal';

import CreateTargetJournal from './journal/CreateTargetJournal';
import HomeJournals from './journal/HomeJournals';
import Stat from './stat/Stat';

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
          case 'stat':
            return(
              <Stat
              targetJournals={this.props.targetJournals}
              />
            );
          case 'home':
          default:
            return( 
              <HomeJournals
              id={this.props.id}
              onError={this.props.onError}
              getJournals={this.props.getJournals}
              targetJournals={this.props.targetJournals}
              pastJournals={this.props.pastJournals}
              />
            );
        }
    }

    render() { 
        return this.getHomeContent();
    }
}

export default HomeContent;