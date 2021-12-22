import React, { Component } from 'react';

import './journals.css';

const axios = require('axios');

class HomeJournals extends Component {
    constructor(props) {
        super(props);
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
                </div>
                <div>{tj.task}</div>
                <div>{tj.describe}</div>
                <div>
                현재 반복 횟수:{tj.currentReps}
                현재 수행 시간:{tj.currentTime}
                </div>
                <div>
                목표 반복 횟수{tj.targetReps}
                목표 수행 시간{tj.targetTime}
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