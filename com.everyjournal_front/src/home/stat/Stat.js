import React, { Component,useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

// class Stat extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         }
//     }

//     render() {
//         // 아래 메소드로 백엔드와 상의해서 통계 내용 받아와서 렌더링에 사용
//         axios.get('/라우터 주소')
//         .then((res)=>{
//             // res.data에 서버가 보낸 내용 들어있음.
//         })
//         .catch((err)=>{
//             //console.error(err); 테스트용 주석
//             //this.props.onError();
//         });
//         return(
//         <div className="Stat">
//             <div>
//                 Statistics Here
//             </div>
//         </div>
//         );
//     }
// }
function Stat(props){
		let [stat,stat변경] = useState([
			{
				date: "2021-12-22",
				category: "운동",
				most_reps: "10",
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
		
		let[공부,공부변경] = useState([]);
		let[운동,운동변경] = useState([]);
		let[악기,악기변경] = useState([]);
		let[기타,기타변경] = useState([]);
	
		let i=0;

		function Division(){
			
			for(i;i<stat.length;i++){
				switch(stat[i].category){
					case '공부' :
					공부변경([...공부,stat[i]]);
					break;
					case '운동' : 
					운동변경([...운동,stat[i]]);
					break;
					case '악기' : 
					악기변경([...악기,stat[i]]);
					break;
					case '기타' : 
					기타변경([...기타,stat[i]]);
					break;
				}
			}
	
			return;
		}

		useEffect(()=>{
				Division()
			}
		,[stat]);
		
    return(
        <>
					<div>
						{console.log(운동)}
					</div>

					{/* <input type="button" value="Update!!" onClick={()=>{
						axios.get('https://codingapple1.github.io/shop/data2.json')
						.then((result)=>{
							console.log(result.data);
						})
						.catch(()=>{

						})}
					}/> */}
        </>
    )
}

export default Stat;