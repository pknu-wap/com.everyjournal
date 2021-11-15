import { Button } from 'react-bootstrap';
import React  from 'react';
import './Header.css'


function Header(props){
   
    return(
      <div className="container">
          <div className="year-month">
              {props.year}년 {props.month+1}월
          </div>
          
          <div className="nav">
            <Button variant="light" onClick={() => {
              if(props.month < 1){ //년도가 바뀌는지 검사
                props.year변경(props.year-1);
                props.month변경(11);
              }
              else
                props.month변경(props.month - 1)
              }}>&lt;</Button>
            <Button variant="light" onClick={()=>{
              let tmp = new Date();
              props.month변경(tmp.getMonth());
              props.year변경(tmp.getFullYear());
            }}>오늘</Button>
            <Button variant="light" onClick={() =>{ 
              if(props.month > 10){ //년도가 바뀌는지 검사
                props.year변경(props.year+1);
                props.month변경(0);
              }
              else
                props.month변경(props.month + 1);
              }}>&gt;</Button>
          </div>
      </div>
    );
  }

  export default Header