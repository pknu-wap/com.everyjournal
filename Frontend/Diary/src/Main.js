import React, { useEffect }  from 'react';
import './Main.css'

function Main(props){

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

    let date =  changeDate(props.month)

    useEffect(()=>{
        props.totalDate변경(date);
    },[props.month]);

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

    return(
      <>
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
                   <div className="date" key={a,i}><span className={condition +' '+ today_condition}>{a}</span></div>
               )
           })
          }
        </div>
       </> 
    );
}

export default Main