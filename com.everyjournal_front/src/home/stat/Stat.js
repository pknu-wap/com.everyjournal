import React, { Component,useState } from 'react';
import axios from 'axios';



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
				total_reps: "전체 반복 수",
				total_time: "전체 수행 시간",
				number_of_participants: "참여자 수",
				number_of_completes: "완료자 수",
			},
		]);

    return(
        <>
					<div>
						<p>날짜 : {stat[0].date}</p>
						<p>카테고리 : {stat[0].category}</p>
						<p>최대 반복 수 : {stat[0].most_reps}</p>
						<p>최대 수행 시간 : {stat[0].most_time}</p>
						<p>전체 반복 수 : {stat[0].total_reps}</p>
						<p>전체 수행 시간 : {stat[0].total_time}</p>
					</div>
					<input type="button" value="Update!!" onClick={()=>{
						axios.get('https://codingapple1.github.io/shop/data2.json')
						.then((result)=>{
							console.log(result.data);
						})
						.catch(()=>{

						})}
					}/>
					
					
        </>
    )
}

export default Stat;