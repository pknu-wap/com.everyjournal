import React, { useEffect, useState }  from 'react';
import './Main.css'

function Main(props){

	let [modal,modal변경]=useState(false);
	let [selectedDate,selectedDate변경]=useState();
	let [journalsIndex, journalsIndex변경] = useState(-1);
	
	useEffect(()=>{
		props.totalDate변경(date);
	},[props.month]);

	function changeDate(m){ //지난 달 의 일부와 다음 달의 일부를 보여주는 함수
		const prevLast = new Date(props.year,m,0); //지난달 마지막 날의 Date객체
		const thisLast = new Date(props.year,m+1,0);//이번달 마지막 날의 Date객체
		const plDate = prevLast.getDate(); //지난달 마지막 날짜
		const plDay = prevLast.getDay(); // 지난달 마지막 요일
		const tlDate = thisLast.getDate(); //이번달 마지막 날짜
		const tlDay = thisLast.getDay(); //이번달 마지막 요일

		let prevDates = [];
		let thisDates = [...Array(tlDate+1).keys()].slice(1); //Array함수는 undefined를 리턴, keys함수를 활용해 0~tlDate 생성, slice로 0 자름
		let nextDates = [];
		

		if(plDay !== 6){
			for(let i=0;i<plDay+1;i++){
				prevDates.unshift(plDate-i);
			}
		}

		for(let i=1;i<7-tlDay;i++){
			nextDates.push(i);
		}
		return prevDates.concat(thisDates,nextDates);
 	}

		let date = changeDate(props.month);

	function checkThisDate(i){
		const thisLast = new Date(props.year,props.month+1,0);
		const firstDateIndex = date.indexOf(1);
		const lastDateIndex = date.lastIndexOf(thisLast.getDate());

		return i>= firstDateIndex && i<=lastDateIndex ? 'this' : 'other';
	}
 
	function drawToday(c,a){
		const today = new Date();
		if(props.month===today.getMonth() && props.year===today.getFullYear() && c==='this'){
			if(today.getDate()===a)
				return 'today';
		}
		else
			return 'nottoday';	
	}
	function findJournalIndex(date){
		for(let i=0;i<props.journals.length;i++){
			if(Date.parse(props.journals[i].targetDate) === date){
				journalsIndex변경(i);
				return;
			}
		}
		journalsIndex변경(-1);
		return;
	}

    return(
			<div className="main-container">
				<div className="days">
					<div className="day">일</div>
					<div className="day">월</div>
					<div className="day">화</div>
					<div className="day">수</div>
					<div className="day">목</div>
					<div className="day">금</div>
					<div className="day">토</div>
				</div>

				<div className="dates">
					{
						props.totalDate.map((a,i)=>{
						const condition = checkThisDate(i); //this 또는 other을 리턴, other클래스 에만 opacity css적용
						const today_condition = drawToday(condition,a);
							return(
									<div className="date" key={a,i} onClick={()=>{selectedDate변경(a); modal변경(true); findJournalIndex(Date.parse(props.year+'-'+(props.month+1)+'-'+a))}}>
										{
											//Date.parse(props.journals[0].targetDate)===Date.parse(props.year+'-'+(props.month+1)+'-'+a)&&<Marking/>
											<Marking journals={props.journals} year={props.year} month={props.month} a={a} /> 
										}
										<span className={condition +' '+ today_condition}>{a}</span>
									</div>
							)
						})
					}
				</div>
				{
					<Modal modal={modal} modal변경={modal변경} selectedDate={selectedDate} year={props.year} month={props.month} journals={props.journals} journalsIndex={journalsIndex}/>
				}
			</div>	
    );
}

function Modal(props){

	if(props.modal===true && props.journalsIndex>=0){
		return(
			<div className="modal-top">
				<p>{ props.year + "년" + (props.month+1) + "월" + props.selectedDate + "일" }</p>
					<div className="modal-context">
						<p>{props.journals[props.journalsIndex].category}</p>
						<p>{props.journals[props.journalsIndex].currentReps}</p>
						<p>{props.journals[props.journalsIndex].task}</p>
						<p>{props.journals[props.journalsIndex].targetReps}</p>
					</div>
				<input type="button" value="닫기" onClick={()=>{props.modal변경(false)}}></input>
			</div>
		);
	}
	return null;
}

function Marking(props){

	for(let k=0; k<props.journals.length ; k++){
		if(Date.parse(props.journals[k].targetDate)===Date.parse(props.year+'-'+(props.month+1)+'-'+ props.a)){
			return(
				<>
					<span>✍</span>
					{/* ✓🟣✍ */}
				</>
			);
		}
	}
	return(
		<></>
	);
}


export default Main