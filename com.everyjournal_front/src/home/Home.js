import React, { Component } from 'react';
import HomeContent from './HomeContent';
import './Home.css';

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
            <p>
            <HomeBtn
            name="일지 보기"
            onClick={()=>this.changeMod('home')}
            />
            <HomeBtn
            name="목표 일지"
            onClick={()=>this.changeMod('create target')}
            />
            <HomeBtn
            name="과거 일지"
            onClick={()=>this.changeMod('create past')}
            />
            <HomeBtn
            name="통계"
            onClick={()=>this.changeMod('stat')}
            />
            </p>
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