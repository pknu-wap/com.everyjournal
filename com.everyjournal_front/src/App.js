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
      diary: true,
      id: null,
      nickname: null,
    }
  }

  getContent() {
    switch(this.state.mode) {
      case 'home':
        return(
          <div>
            HOME
          </div>
        );
        break;
      case 'sign in':
        ;
        break;
      case 'sign up':
        ;
        break;
      default:
        ;
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopMenuBar/>
        </header>
        <section>
          <header>
            <div>
              <p>
              <input type="button" value="Diary" onClick={()=>{this.setState({diary:!(this.state.diary)})}}/>
              </p>
            </div>
            { 
            (()=>{
              if(this.state.diary===true)
                return (<Calendar/>);
            })()
            }
          </header>
          <article>
            {this.getContent()}
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
