import React, { Component,useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function Stat(props){
		const [stat,stat변경] = useState([
			{
				date: "2021-12-22",
				category: "운동",
				most_reps: "15",
				most_time: "2",
				total_reps: "10",
				total_time: "3",
				number_of_participants: "참여자 수",
				number_of_completes: "완료자 수",
			},
			{
				date: "2021-12-22",
				category: "공부",
				most_reps: "10",
				most_time: "2",
				total_reps: "15",
				total_time: "20",
				number_of_participants: "참여자 수",
				number_of_completes: "완료자 수",
			},
			{
				date: "2021-12-22",
				category: "기타",
				most_reps: "10",
				most_time: "2",
				total_reps: "5",
				total_time: "18",
				number_of_participants: "참여자 수",
				number_of_completes: "완료자 수",
			},
			{
				date: "2021-12-30",
				category: "운동",
				most_reps: "10",
				most_time: "2",
				total_reps: "8",
				total_time: "25",
				number_of_participants: "참여자 수",
				number_of_completes: "완료자 수",
			},
			{
				date: "2021-12-02",
				category: "기타",
				most_reps: "10",
				most_time: "2",
				total_reps: "5",
				total_time: "18",
				number_of_participants: "참여자 수",
				number_of_completes: "완료자 수",
			},
		]);
		
		const[공부,공부변경] = useState([]);
		const[운동,운동변경] = useState([]);
		const[악기,악기변경] = useState([]); 
		const[기타,기타변경] = useState([]);
		

		function Division(){
			stat.map((e)=>{
				switch(e.category){
					case '공부' :
					공부변경(운동=>([...운동,e]));
					break;
					case '운동' : 
					운동변경(운동=>([...운동,e]));
					break;
					case '악기' : 
					악기변경(악기=>([...악기,e]));
					break;
					case '기타' : 
					기타변경(기타=>([...기타,e]));
					break;
				}
			});
		}

		useEffect(()=>{
				Division()
			}
		,[stat]);

	
    return(
        <div>
					<div>
						<p>공부</p>
						{/* <CalcStat category={공부}/> */}
					</div>
					<div>
						<p>운동</p>
						{/* <CalcStat category={운동}/> */}
						{console.log(운동[0].date) }
						{console.log(운동[0]['date'])}
					</div>
					<div>
						<p>악기</p>
						{/* <CalcStat category={악기}/> */}
					</div>
					<div>
						<p>기타</p>
						{/* <CalcStat category={기타}/> */}
					</div>
        </div>
    )
}
function CalcStat(props){

	return(
		<div>
			<div>
				평균 최대 반복수 : {}
			</div>
			<div>
				평균 최대 수행시간 : {}
			</div>
			<div>
				평균 전체 반복수 : {}
			</div>
			<div>
				평균 전체 수행시간 : {}
			</div>
		</div>
	);
}

export default Stat;