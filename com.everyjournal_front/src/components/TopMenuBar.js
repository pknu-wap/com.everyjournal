import React, { Component } from 'react';
import './TopMenuBar.css';

function TopMenuBtn (props) {
    return (
        <button className="TopMenuBtn">
            {props.name}
        </button>
    );
}

class TopMenuBar extends Component {
  render() {
    return (
      <div className="TopMenuBar">
          <TopMenuBtn name="Sign in"></TopMenuBtn>
          <TopMenuBtn name="Sign up"></TopMenuBtn>
      </div>
    );
  }
}

export default TopMenuBar;