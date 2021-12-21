import React, { Component } from 'react';

const axios = require('axios');

class Stat extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        // 아래 메소드로 백엔드와 상의해서 통계 내용 받아와서 렌더링에 사용
        axios.get('/라우터 주소')
        .then((res)=>{
            // res.data에 서버가 보낸 내용 들어있음.
        })
        .catch((err)=>{
            //console.error(err); 테스트용 주석
            //this.props.onError();
        });
        return(
        <div className="Stat">
            <div>
                Statistics Here
            </div>
        </div>
        );
    }
}

export default Stat;