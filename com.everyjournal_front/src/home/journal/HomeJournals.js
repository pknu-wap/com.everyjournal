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

    render() {
        this.props.getJournals();
        this.state.targetJournals = this.props.targetJournals;
        const journalList = [];
       // let arr = this.props.targetJournals.from();
        this.state.targetJournals.map((tj)=>{
            if(tj.expired===false) {
            journalList.push(
                <div className="target_journals" data-id={tj.id}>
                    <div className="basic_info"
                     style={tj.completeOrNot?{backgroundColor:'rgba(55,200,55,0.8)'}:{}}
                     >
                        <div className='jn_title'>{tj.task}</div>
                        <div className='jn_info'>
                        <span className="jn_cate"><b>{tj.category}</b></span>
                        <span className="jn_date">
                            <div>목표 날짜</div>
                            <div>{tj.targetDate}</div>
                        </span>
                        {tj.completeOrNot}
                        {tj.expired}
                        <span className="jn_nick"><b>{tj.nickname}</b></span>
                        <input type='button' value={'Delete'}
                        onClick={function(e){this.onDelete(tj.id)}.bind(this)}
                        data-id={tj.id}
                        className='jn_del'
                        />
                        </div>
                </div>
                <div className='jn_desc'>{tj.describe}</div>
                <div>
                <span className='jn_reps'>목표 : {tj.targetReps}회</span>&nbsp;
                <span className='jn_reps'>현재 : {tj.currentReps}회</span>&nbsp;
                <input className='jn_up' type='button' value={'UP!'} onClick={function(e){this.onUp(tj.id)}.bind(this)} />
                </div>
                <JournalClock 
                id={tj.id} 
                targetTime={tj.targetTime} 
                currentTime={tj.currentTime} 
                />
                </div>)
            } else {
                journalList.push(
                    <div className="target_journals" data-id={tj.id}>
                        <div className="basic_info" 
                        style={tj.completeOrNot?{backgroundColor:'rgba(55,255,55,0.8)'}:{}}
                        >
                            <div className='jn_title' style={{backgroundColor:'rgba(255, 55, 55, 0.8)'}}>{tj.task}</div>
                            <div className='jn_info'>
                            <span className="jn_cate"><b>{tj.category}</b></span>
                            <span className="jn_date">
                                <div>목표 날짜</div>
                                <div>{tj.targetDate}</div>
                            </span>
                            {tj.completeOrNot}
                            {tj.expired}
                            <span className="jn_nick"><b>{tj.nickname}</b></span>
                            <input type='button' value={'Delete'}
                            onClick={function(e){this.onDelete(tj.id)}.bind(this)}
                            data-id={tj.id}
                            className='jn_del'
                            />
                            </div>
                    </div>
                    <div className='jn_desc'>{tj.describe}</div>
                    <div>
                    <span className='jn_reps'>목표 : {tj.targetReps}회</span>&nbsp;
                    <span className='jn_reps'>현재 : {tj.currentReps}회</span>&nbsp;
                    <input className='jn_up' type='button' value={'UP!'} onClick={function(e){this.onUp(tj.id)}.bind(this)} />
                    </div>
                    <JournalClock 
                    id={tj.id} 
                    targetTime={tj.targetTime} 
                    currentTime={tj.currentTime} 
                    />
                    </div>)
            }
        });
        return(
        <div className="HomeJournals">
            {journalList}
        </div>
        );
    }
}

export default HomeJournals;