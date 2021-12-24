
import axios from 'axios';
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
        let curTimeStr = '';
        if(this.state.curTime>=60) {
            curTimeStr += parseInt(this.state.curTime/60) + ':';
            if(this.state.curTime%60 < 10) curTimeStr += '0' + this.state.curTime%60;
            else curTimeStr += this.state.curTime%60;
        } else {
            curTimeStr += '00:';
            if(this.state.curTime%60 < 10) curTimeStr += '0' + this.state.curTime%60;
            else curTimeStr += this.state.curTime%60;
        }

    return(
        <div>
            목표 수행 시간{this.props.targetTime}
            현재 수행 시간{curTimeStr}
            <input type='button' value={'Start!'} 
            onClick={(e)=>{
                if(this.timer===null) {
                    this.timer = setInterval(()=>{
                        this.setState({curTime: this.state.curTime+1});
                    },1000);
                }
            }}/>
            <input type='button' value={'Stop!'}
            onClick={(e)=>{
                clearInterval(this.timer);
                this.timer = null;
                axios.put(`/api/journal/target/${this.props.id}/cur_time/set/${this.state.curTime}`)
                .then((res)=>{
                    if(res.status===200) { // 작성 성공
                        console.log(res.status);
                        this.props.getJournals();
                    } else if(res.status===412) { // 작성 실패
                        console.log(res.status,res.data);
                        this.props.onError();
                    }
                })
                .catch((err)=>{
                    console.log(err);
                    //this.props.onError(); // #test
                });
            }}/>
        </div>
    );
    }
}

export default JournalClock;