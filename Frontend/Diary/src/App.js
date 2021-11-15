import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';

function App() {
  const date = new Date();
  
  let [month, month변경] =  useState(date.getMonth()); //date.getMonth() : 1월(0) ~ 12월(11)
  let [year, year변경] = useState(date.getFullYear());
  let [totalDate, totalDate변경] = useState([]);


  return (
    <div className="App">
      <div className="calender">
        <Header year={year} year변경={year변경} month={month} month변경={month변경} /> 
        <Main year={year}  month={month} totalDate={totalDate} totalDate변경={totalDate변경} />
      </div>
    </div>  
  );
}

export default App;
