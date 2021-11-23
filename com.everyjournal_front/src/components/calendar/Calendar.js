import React, { useState }  from 'react';
import './Calendar.css';
import Header from './Header';
import Main from './Main';

function Calendar(props){
	// props.diary의 true false에 따라 달력을 표시할지 안할지 결정.
	const date_init = new Date();

	let [month, month변경] =  useState(date_init.getMonth()); //date.getMonth() : 1월(0) ~ 12월(11)
  let [year, year변경] = useState(date_init.getFullYear());
  let [totalDate, totalDate변경] = useState([]);

	let [diary, setDiary] = useState(false);
	
	if(diary===true){
    return(
			<div className="top">
				<p>
					<input type="button" value="Diary" onClick={()=>{setDiary(!diary)}}/>
				</p>
				<div className="calender">
					<Header year={year} year변경={year변경} month={month} month변경={month변경} /> 
					<Main year={year}  month={month} totalDate={totalDate} totalDate변경={totalDate변경} />
				</div>
			</div>
    );
	} else {
		return (
			<div className="Top">
				<p>
					<input type="button" value="Diary" onClick={()=>setDiary(!diary)}/>
				</p>
			</div>
		);
	}
}

export default Calendar