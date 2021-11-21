import React, { Component } from 'react';
const axios = require('axios');

class SignUp extends Component {
    render() {
        return(
        <div className="SignUp">
            <form action="/"
            onSubmit={function(e){
                    e.preventDefault();
                    axios.post('/api/auth/join',{
                        nickname: e.target.nickname.value,
                        id: e.target.id.value,
                        password: e.target.password.value
                    }).then((res)=>{
                        if(res.status===200) { // 가입 성공
                            console.log(res.status,res.data);
                        } else if(res.status===412) { // 가입 실패
                            console.log(res.status,res.data);
                        }
                    }).catch((err)=>{
                        console.log(err);
                    })
            }}
            >
                <p>
                    <input type="text" name="nickname" placeholder="Nickname"></input>
                    </p>
                <p>
                    <input type="text" name="id" placeholder="ID"></input>
                </p>
                <p>
                    <input type="password" name="password" placeholder="Password"></input>
                </p>
                <p>
                    <input type="submit"></input>
                </p>
            </form>
        </div>
        );
    }
}

export default SignUp;