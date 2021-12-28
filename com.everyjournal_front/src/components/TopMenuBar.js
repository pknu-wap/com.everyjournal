import React, { Component } from 'react';
import './TopMenuBar.css';
import axios from 'axios';

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
    if(this.props.nickname===null){
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
              onClick={()=>{
                axios.get('api/auth/logout')
                .then((res)=>{
                  if(res.status===200){
                    this.props.onChangeMode('sign out');
                  } else {
                    this.props.onChangeMode('sign out');
                    this.props.onChangeMode('error');
                  }
                })
                .catch((err)=> { 
                  this.props.onChangeMode('sign out');
                  this.props.onChangeMode('error');
                });
                }}
            />
            <span style={{position:'absolute'}}>
              &nbsp;
              <span style={{color:'rgb(255,240,50)', border:'solid 0.15em rgba(255,220,10,0.5)', backgroundColor:'rgba(255,255,255,0.1', borderRadius:'0.2em'}}>
              <b>
              {this.props.nickname}
              </b>
              </span>
            </span>
        </div>
      );
    }
  }
}

export default TopMenuBar;