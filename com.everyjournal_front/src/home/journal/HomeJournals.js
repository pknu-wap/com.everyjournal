import { render } from '@testing-library/react';
import React, { Component } from 'react';
import JournalClock from './JournalClock';

import './journals.css';

const axios = require('axios');

class HomeJournals extends Component {
    constructor(props) {
        super(props);
        this.state={
            targetJournals: [],
        }
    }
    
    onDelete(id) { // 각 일지 삭제 버튼
        //e.preventDefault();
        console.log('DeleteTargetJournal:',id);
        axios.delete(`api/journal/target/${id}`)
        .then((res)=>{
            if(res.status===200) { // 작성 성공
                console.log(res.status);
                this.props.getJournals();
            } else if(res.status===412) { // 작성 실패
                console.log(res.status,res.data);
                this.props.onError();
            }
        }).catch((err)=>{
            console.log(err);
            this.props.onError();
        }).finally(()=>{this.props.getJournals(id)});
    }

    onUp(id) { // 각 일지 count up 버튼
        //e.preventDefault();
        console.log('CountUpJournal:',id);
        axios.put(`/api/journal/target/${id}/cur_reps/add`)
        .then((res)=>{
            if(res.status===200) { // 작성 성공
                console.log(res.status);
                this.props.getJournals();
            } else if(res.status===412) { // 작성 실패
                console.log(res.status,res.data);
                this.props.onError();
            }
        }).catch((err)=>{
            console.log(err);
            //this.props.onError(); // #test
        }).finally(()=>{this.props.getJournals(id)});
    }

    onStart(id) {

    }

    onStop(id) {

    }

    render() {
        this.props.getJournals();
        this.state.targetJournals = this.props.targetJournals;
        const journalList = [];
       // let arr = this.props.targetJournals.from();
        this.state.targetJournals.map((tj)=>{
            journalList.push(
                <div className="target_journals" data-id={tj.id}>
                    <div className="basic_info">
                        {tj.nickname}
                        {tj.category}
                        {tj.targetDate}
                        {tj.completeOrNot}
                        {tj.expired}
                    <input type='button' value={'Delete'}
                    onClick={function(e){this.onDelete(tj.id)}.bind(this)}
                    data-id={tj.id}
                />
                </div>
                <div>{tj.task}</div>
                <div>{tj.describe}</div>
                <div>
                목표 반복 횟수{tj.targetReps}
                현재 반복 횟수:{tj.currentReps}
                <input type='button' value={'UP!'} onClick={function(e){this.onUp(tj.id)}.bind(this)} />
                </div>
                <JournalClock 
                id={tj.id} 
                targetTime={tj.targetTime} 
                currentTime={tj.currentTime} 
                />
                </div>)
        });
        return(
        <div className="HomeJournals">
            {journalList}
        </div>
        );
    }
}

export default HomeJournals;