import React, { Component } from 'react';
import './TopMenuBar.css';

function TopMenuBtn (props) {
    return (
        <input 
        type="button"
        className="TopMenuBtn"
        value={props.name}
        onClick={props.onClick}
        />
    );
}

class TopMenuBar extends Component {
  render() {
    if(this.props.id===null){
    return ( // 비로그인
      <div className="TopMenuBar">
          <TopMenuBtn 
            name="Home"
            onClick={()=>{this.props.onChangeMode('home');}}
          />
          <TopMenuBtn 
            name="Sign in"
            onClick={()=>{this.props.onChangeMode('sign in');}}
          />
          <TopMenuBtn 
            name="Sign up"
            onClick={()=>{this.props.onChangeMode('sign up');}}
          />
      </div>
    );
    } else {
      return ( // 로그인
        <div className="TopMenuBar">
            <TopMenuBtn 
              name="Home"
              onClick={()=>{this.props.onChangeMode('home');}}
            />
            <TopMenuBtn 
              name="Sign out"
              onClick={()=>{this.props.onChangeMode('sign out');}}
            />
        </div>
      );
    }
  }
}

export default TopMenuBar;