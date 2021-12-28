import React, { useState, useEffect }  from 'react';
import './Calendar.css';
import Header from './Header';
import Main from './Main';

function Calendar(props){
	// props.diary의 true false에 따라 달력을 표시할지 안할지 결정.
	const date_init = new Date();

	let [month, month변경] =  useState(date_init.getMonth()); //date.getMonth() : 1월(0) ~ 12월(11)
  let [year, year변경] = useState(date_init.getFullYear());
  let [totalDate, totalDate변경] = useState([]);
	// let [journals,journals변경] = useState([
	// 	{ // 목표 일지의 경우
	// 	target: true,
	// 	id: 0,
	// 	owner: "일지 주인",
	// 	task: "턱걸이 20개",
	// 	describe: "턱걸이",
	// 	category: "운동",
	// 	currentReps: "5",
	// 	currentTime: "수행한 시간",
	// 	targetReps: "15",
	// 	targetTime: "목표 수행 시간",
	// 	targetDate: "2021-12-23",
	// 	completeOrNot: true,
	// 	expired: true,
	// 	},
	// 	{ // 목표 일지의 경우
	// 		target: true,
	// 		id: 0,
	// 		owner: "일지 주인",
	// 		task: "데이터베이스 1회독",
	// 		describe: "데이터베이스",
	// 		category: "공부",
	// 		currentReps: "2",
	// 		currentTime: "수행한 시간",
	// 		targetReps: "10",
	// 		targetTime: "목표 수행 시간",
	// 		targetDate: "2021-12-20",
	// 		completeOrNot: true,
	// 		expired: true,
	// 	},
	// 	{ // 목표 일지의 경우
	// 		target: true,
	// 		id: 0,
	// 		owner: "일지 주인",
	// 		task: "독서 1주 1권",
	// 		describe: "어린왕자",
	// 		category: "독서",
	// 		currentReps: "3",
	// 		currentTime: "수행한 시간",
	// 		targetReps: "4",
	// 		targetTime: "목표 수행 시간",
	// 		targetDate: "2021-12-19",
	// 		completeOrNot: true,
	// 		expired: true,
	// 	},
	// 	{ // 목표 일지의 경우
	// 		target: true,
	// 		id: 0,
	// 		owner: "일지 주인",
	// 		task: "턱걸이 20개",
	// 		describe: "턱걸이",
	// 		category: "운동",
	// 		currentReps: "7",
	// 		currentTime: "수행한 시간",
	// 		targetReps: "14",
	// 		targetTime: "목표 수행 시간",
	// 		targetDate: "2021-11-11",
	// 		completeOrNot: true,
	// 		expired: true,
	// 	},
	// ]);

	let [diary, setDiary] = useState(false);
	if(props.mode==='stat') return <div></div>;
	else{
	if(diary===true){
    return(
			<div className="top">
					<input className="CalBtn" type="button" value="Calendar" onClick={()=>{setDiary(!diary)}}/>
				<div className="calender">
					<Header year={year} year변경={year변경} month={month} month변경={month변경} /> 
					<Main year={year}  month={month} totalDate={totalDate} totalDate변경={totalDate변경} journals={props.journals}/>
				</div>
			</div>
    );
	} else {
		return (
			<div className="Top">
					<input className="CalBtn" type="button" value="Calendar" onClick={()=>setDiary(!diary)}/>
			</div>
		);
	}
	}
}

export default Calendar