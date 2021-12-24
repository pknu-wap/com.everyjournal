
import React, { Component } from 'react';

class JournalClock extends Component {
    constructor(props) {
        super(props);
        this.state={
            curTime: this.props.currentTime
        }
        this.timer = null;
    }

    render() {
    return(
        <div>
            목표 수행 시간{this.props.targetTime}
            현재 수행 시간:{this.state.curTime}
            <input type='button' value={'Start!'} 
            onClick={(e)=>{
                if(this.timer===null) {
                    this.timer = setInterval(()=>{
                        console.log('ct:', this.state.curTime);
                        this.setState({curTime: this.state.curTime+1});
                    },1000);
                }
            }}/>
            <input type='button' value={'Stop!'}
            onClick={(e)=>{
                clearInterval(this.timer);
                this.timer = null;
            }}/>
        </div>
    );
    }
}

export default JournalClock;