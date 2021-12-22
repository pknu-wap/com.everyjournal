import React, { Component } from 'react';

import './journals.css';

const axios = require('axios');

class HomeJournals extends Component {
    constructor(props) {
        super(props);
    }
    
    onDelete(id) {
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
        });
    }

    render() {
        this.props.getJournals();
        const journalList = [];
       // let arr = this.props.targetJournals.from();
        this.props.targetJournals.map((tj)=>{
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
                <input type='button' value={'UP!'}/>
                </div>
                <div>
                목표 수행 시간{tj.targetTime}
                현재 수행 시간:{tj.currentTime}
                <input type='button' value={'Start!'}/>
                <input type='button' value={'Stop!'}/>
                </div>
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