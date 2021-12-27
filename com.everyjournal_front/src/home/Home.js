import React, { Component } from 'react';
import HomeContent from './HomeContent';
import './Home.css';
import Calendar from '../components/calendar/Calendar'

function HomeBtn (props) {
    return (
        <input 
        type="button"
        className="HomeBtn"
        value={props.name}
        onClick={props.onClick}
        />
    );
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          //home, create target, create past, stat
          mode: 'home',
					
        }
        this.changeMode = this.changeMod.bind(this);
    }

    changeMod(mod) {
        this.setState({mode:mod});
        return;
    }
      
    render() {
        return(
        <div>
        <Calendar
            mode={this.state.mode}
            journals={this.state.targetJournals}
        />
        &nbsp;
            <div>
            <HomeBtn
            className="HomeBtn"
            name="일지 보기"
            onClick={()=>this.changeMod('home')}
            />
            &nbsp;
            <HomeBtn
            className="HomeBtn"
            name="목표 일지"
            onClick={()=>this.changeMod('create target')}
            />
            &nbsp;
            <HomeBtn
            className="HomeBtn"
            name="과거 일지"
            onClick={()=>this.changeMod('create past')}
            />
            &nbsp;
            <HomeBtn
            className="HomeBtn"
            name="통계"
            onClick={()=>this.changeMod('stat')}
            />
            </div>
            &nbsp;
            <HomeContent
            mode={this.state.mode}
            onError={this.props.onError}
            onChangeMode={this.changeMod}
            id={this.props.id}
            getJournals={this.props.getJournals}
            targetJournals={this.props.targetJournals}
            pastJournals={this.props.pastJournals}
            />
        </div>
        );
    }
}

export default Home;