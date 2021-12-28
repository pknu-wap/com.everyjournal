import React, { Component } from 'react';
import './App.css';

import TopMenuBar from './components/TopMenuBar';
import Content from './components/Content';

const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //home, sign in, sign up, error
      mode: 'home',
      id: 'test', // #test
      nickname: 'test123',
      targetJournals: [],
      pastJournals: []
    }
    this.changeMode = this.changeMod.bind(this);
    this.getJournals = this.get_Journals.bind(this);

    this.state.targetJournals = [ // #test
      { // 목표 일지의 경우
      target: true,
      id: 3,
      owner: "일지 주인",
      task: "턱걸이 20개",
      describe: "턱걸이",
      category: "운동",
      currentReps: 5,
      currentTime: 0,
      targetReps: 15,
      targetTime: 3600,
      targetDate: "2021-12-23",
      completeOrNot: true,
      expired: true,
      },
      { // 목표 일지의 경우
        target: true,
        id: 2,
        owner: "일지 주인",
        task: "데이터베이스 1회독",
        describe: "데이터베이스",
        category: "공부",
        currentReps: 2,
        currentTime: 0,
        targetReps: 10,
        targetTime: 0,
        targetDate: "2021-12-20",
        completeOrNot: true,
        expired: true,
      },
      { // 목표 일지의 경우
        target: true,
        id: 1,
        owner: "일지 주인",
        task: "독서 1주 1권",
        describe: "어린왕자",
        category: "독서",
        currentReps: 3,
        currentTime: 0,
        targetReps: 4,
        targetTime: 0,
        targetDate: "2021-12-19",
        completeOrNot: true,
        expired: true,
      },
      { // 목표 일지의 경우
        target: true,
        id: 0,
        owner: "일지 주인",
        task: "턱걸이 20개",
        describe: "턱걸이",
        category: "운동",
        currentReps: 7,
        currentTime: 0,
        targetReps: 20,
        targetTime: 0,
        targetDate: "2021-11-11",
        completeOrNot: true,
        expired: true,
      },
    ];
  }

  get_Journals(id) {
    if(id !== undefined) { // #test for count up
      const arr = Array.from(this.state.targetJournals);
      let idx= arr.findIndex(obj=>obj.id === id);
      arr[idx].currentReps++;
      this.setState({targetJournals: arr});
      return;
    }
    axios.get('/api/journal/target/'+this.props.id)
        .then((res)=>{
            this.setState({targetJournals:res.data});
        })
        .catch((err)=>{
            //console.error(err); #test
            //this.props.onError();
        });
        axios.get('/api/journal/past/'+this.props.id)
        .then((res)=>{
            this.setState({pastJournals:res.data});
        })
        .catch((err)=>{
            //console.error(err); #test
            //this.props.onError();
        });
  }

  changeMod(mod) {
    if(mod==='sign out') this.setState({id:null, nickname:null, mode:'home'});
    else this.setState({mode:mod});
    return;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopMenuBar
            onChangeMode={this.changeMode}
            nickname={this.state.nickname}
          />
        </header>
        <section>
          <article>
            <Content
              mode={this.state.mode}
              onSignIn={(_id, _nick)=>{this.setState({id:_id, nickname:_nick, mode:'home'})}}
              onSignUp={(_id)=>{this.setState({id:null, nickname:null, mode:'home'})}}
              onChangeMode={this.changeMode}
              id={this.state.id}
              getJournals={this.getJournals}
              targetJournals={this.state.targetJournals}
              pastJournals={this.state.pastJournals}
            />
          </article>
        </section>
        <footer>
          <div>
            &nbsp;
          </div>
          &nbsp;
          <div className="footer">
          &nbsp;
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
