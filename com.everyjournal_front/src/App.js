import React, { Component } from 'react';
import './App.css';

import TopMenuBar from './components/TopMenuBar';
import Content from './components/Content';
import Calendar from './components/calendar/Calendar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //home, sign in, sign up, error
      mode: 'home',
      id: 'test', // 'test' to test
      nickname: 'test',
    }
    this.changeMode = this.changeMod.bind(this);
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
          <header>
            <div>
            </div>
            <Calendar/>
          </header>
          <article>
            <Content
              mode={this.state.mode}
              onSignIn={(_id, _nick)=>{this.setState({id:_id, nickname:_nick, mode:'home'})}}
              onSignUp={(_id)=>{this.setState({id:null, nickname:null, mode:'home'})}}
              onChangeMode={this.changeMode}
              id={this.state.id}
            />
          </article>
        </section>
        <footer>
          <div className="footer">
          footer
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
