import React, { Component } from 'react';

import './journals.css';

const axios = require('axios');

class HomeJournals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targetJournals: [],
            pastJournals: []
        }
        // 프론트 테스트용 
        const tmp_tg = {
            id: 3,
            owner: "test1",
            nickname: "nick",
            task: "목표의 제목",
            describe: "목표에 관한 설명",
            category: "운동/공부 등 미리 정해진 카테고리",
            currentReps: 2,
            currentTime: 0,
            targetReps: 20,
            targetTime: 0,
            targetDate: "목표 날짜",
            completeOrNot: false,
            expired: false
        }
        let tmp_arr = [];
        for(let i = 0; i < 7;i++) {
            tmp_arr = tmp_arr.concat(tmp_tg);
        }
        this.state.targetJournals=tmp_arr;
        console.log(this.state.targetJournals);
    }

    render() {
        axios.get('/api/journal/target/'+this.props.id)
        .then((res)=>{
            this.setState({targetJournals:res.data});
        })
        .catch((err)=>{
            //console.error(err);
            //this.props.onError();
        });
        axios.get('/api/journal/past/'+this.props.id)
        .then((res)=>{
            this.setState({pastJournals:res.data});
        })
        .catch((err)=>{
            //console.error(err);
            //this.props.onError();
        });
        const journalList = [];
        this.state.targetJournals.map((tj)=>{
            journalList.push(
                <div className="target_journals" data-id={tj.id}>
                {tj.nickname}
                {tj.task}
                {tj.describe}
                {tj.category}
                {tj.currentReps}
                {tj.currentTime}
                {tj.targetReps}
                {tj.targetTime}
                {tj.targetDate}
                {tj.completeOrNot}
                {tj.expired}
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