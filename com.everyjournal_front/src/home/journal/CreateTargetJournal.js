import React, { Component } from 'react';

import './JournalForm.css';

const axios = require('axios');

class CreateTargetJournal extends Component {
    render() {
        return(
        <div className="CreateTargetJournal">
            <div>
                <h1>
                    목표 일지 작성
                </h1>
            </div>
            <form action="/"
            onSubmit={function(e){
                    e.preventDefault();
                    if(e.target.task.value!==""&&
                    e.target.category!==""&&
                    e.target.publicOrPrivate!==""&&
                    e.target.targetDate!==""){
                    console.log({
                        owner: this.props.id,
                        task: e.target.task.value,
                        describe: e.target.describe.value,
                        category: e.target.category.value,
                        publicOrPrivate: e.target.publicOrPrivate.value,
                        targetReps: e.target.targetReps.value,
                        targetTime: e.target.targetTime.value*60,
                        targetDate: e.target.targetDate.value
                    });
                    axios.post('/api/journal/target/'+this.props.id,{
                        owner: this.props.id,
                        task: e.target.task.value,
                        describe: e.target.describe.value,
                        category: e.target.category.value,
                        publicOrPrivate: e.target.publicOrPrivate.value,
                        targetReps: e.target.targetReps.value,
                        targetTime: e.target.targetTime.value*60,
                        targetDate: e.target.targetDate.value
                    }).then((res)=>{
                        if(res.status===200) { // 작성 성공
                            console.log(res.status);
                            this.props.onChangeMode();
                        } else if(res.status===412) { // 작성 실패
                            console.log(res.status,res.data);
                            this.props.onError();
                        }
                    }).catch((err)=>{
                        console.log(err);
                        this.props.onError();
                    });
                } else {
                    alert("필수 입력 창이 비었습니다.");
                }
            }.bind(this)}
            >
                <p>
                    <input type="text" name="task" placeholder="목표"></input>
                    </p>
                <p>
                    <textarea name="describe" placeholder="설명"></textarea>
                </p>
                <p>
                    <input id="공부" type="radio"  name="category" value="공부"/>
                    <label htmlFor="공부" className="journal_form_label">공부</label>
                    <input id="운동"type="radio"  name="category" value="운동"/>
                    <label htmlFor="운동"className="journal_form_label">운동</label>
                    <input id="악기"type="radio"  name="category" value="악기"/>
                    <label htmlFor="악기"className="journal_form_label">악기</label>
                    <input id="기타"type="radio"  name="category" value="기타"/>
                    <label htmlFor="기타"className="journal_form_label">기타</label>
                </p>
                <p>
                    <input id="공개"type="radio"  name="publicOrPrivate" value="public"/>
                    <label htmlFor="공개"className="journal_form_label">공개</label>
                    <input id="비공개"type="radio"  name="publicOrPrivate" value="private"/>
                    <label htmlFor="비공개"className="journal_form_label">비공개</label>
                </p>
                <p>
                    <input name="targetReps" type='number' placeholder="목표 횟수" min="0"></input>
                </p>
                <p>
                    <input name="targetTime" type='number' placeholder="목표 시간(분)" min="0"></input>
                </p>
                <p>
                    <input name="targetDate" type='date' placeholder="목표 날짜" ></input>
                </p>
                <p>
                    <input type="submit" value="Goal!"></input>
                </p>
            </form>
        </div>
        );
    }
}

export default CreateTargetJournal;