import React, { useState } from 'react';
import './App.css';
import Calendar from './Calendar';

function App() {
  const date = new Date();
  
  let [month, month변경] =  useState(date.getMonth()); //date.getMonth() : 1월(0) ~ 12월(11)
  let [year, year변경] = useState(date.getFullYear());
  let [totalDate, totalDate변경] = useState([]);


  return (
    <div className="App">
      <Calendar year={year} year변경={year변경} month={month} month변경={month변경} totalDate={totalDate} totalDate변경={totalDate변경}/>
    </div>  
  );
}

export default App;
