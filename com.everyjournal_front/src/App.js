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
      nickname: 'test',
      targetJournals: [],
      pastJournals: []
    }
    this.changeMode = this.changeMod.bind(this);
    this.getJournals = this.get_Journals.bind(this);

    // 프론트 테스트용 #test
    const tmp_tg = {
      id: 3,
      owner: "test1",
      nickname: "nick123nfffasgasgfa",
      task: "목표 제목",
      describe: "목표에 관한 설명",
      category: "카테고리",
      currentReps: 2,
      currentTime: 0,
      targetReps: 20,
      targetTime: 0,
      targetDate: "2021-12-31",
      completeOrNot: false,
      expired: false
    }
    let tmp_arr = []
    for(let i = 0; i < 7;i++) {
      tmp_tg.id= i;
      tmp_arr = tmp_arr.concat(JSON.parse(JSON.stringify(tmp_tg)));
    }
    this.state.targetJournals = tmp_arr;
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
            id={this.state.id}
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
