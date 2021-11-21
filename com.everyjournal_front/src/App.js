import React, { Component } from 'react';
import './App.css';

import TopMenuBar from './components/TopMenuBar';
import Content from './components/Content';
import Calendar from './components/calendar/Calendar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //home, sign in, sign up, 
      mode: 'home',
      id: null,
      nickname: null,
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopMenuBar
            onChangeMode={(mod)=>{
              if(mod==='sign out') this.setState({id:null, mode:'home'});
              this.setState({mode:mod});
            }}
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
              onSignIn={(_id)=>{this.setState({id:_id, mode:'home'})}}
              onSignUp={(_id)=>{this.setState({id:null, mode:'home'})}}
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
