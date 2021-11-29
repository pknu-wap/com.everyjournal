import React, { Component } from 'react';

import './JournalForm.css';

const axios = require('axios');

class CreateTargetJournal extends Component {
    render() {
        return(
        <div className="CreateTargetJournal">
            <form action="/"
            onSubmit={function(e){
                    e.preventDefault();
                    axios.post('/api/auth/join',{
                        nickname: e.target.nickname.value,
                        id: e.target.id.value,
                        password: e.target.password.value
                    }).then((res)=>{
                        if(res.status===200) { // 가입 성공
                            console.log(res.status,res.data);
                        } else if(res.status===412) { // 가입 실패
                            console.log(res.status,res.data);
                        }
                    }).catch((err)=>{
                        console.log(err);
                    })
            }}
            >
                <p>
                    <input type="text" name="task" placeholder="목표"></input>
                    </p>
                <p>
                    <textarea name="describe" placeholder="설명"></textarea>
                </p>
                <p>
                    <input type="radio"  name="category" value="공부"/>
                    <label className="journal_form_label">공부</label>
                    <input type="radio"  name="category" value="운동"/>
                    <label className="journal_form_label">운동</label>
                    <input type="radio"  name="category" value="악기"/>
                    <label className="journal_form_label">악기</label>
                </p>
                <p>
                    <input type="radio"  name="publicOrPrivate" value="공개"/>
                    <label className="journal_form_label">공개</label>
                    <input type="radio"  name="publicOrPrivate" value="비공개"/>
                    <label className="journal_form_label">비공개</label>
                </p>
                <p>
                    <input name="targetReps" type='number' placeholder="목표 횟수"></input>
                </p>
                <p>
                    <input name="targetTime" type='time' placeholder="목표 시간"></input>
                </p>
                <p>
                    <input name="targetDate" type='date' placeholder="목표 날짜"></input>
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