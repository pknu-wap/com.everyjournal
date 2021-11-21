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
            onChangeMode={(mod)=>this.setState({mode:mod})}
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
