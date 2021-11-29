import React, { Component } from 'react';

const axios = require('axios');

class SignIn extends Component {
    render() {
        return(
            <div className="SignUp">
            <form action="/"
            onSubmit={function(e){
                    e.preventDefault();
                    axios.post('/api/auth/login',{
                        id: e.target.id.value,
                        password: e.target.password.value
                    }).then((res)=>{
                        if(res.status===200) { // 로그인 성공
                            console.log(res.status,res.data);
                            this.props.onSignIn(res.data.id, res.data.nickname);
                        } else if(res.status===412) { // 로그인 실패
                            console.log(res.status,res.data);
                        }
                    }).catch((err)=>{
                        console.log(err);
                    })
            }.bind(this)}
            >
                <p>
                    <input type="text" name="id" placeholder="ID"></input>
                </p>
                <p>
                    <input type="password" name="password" placeholder="Password"></input>
                </p>
                <p>
                    <input type="submit" value="Sign in!"></input>
                </p>
            </form>
        </div>
        );
    }
}

export default SignIn;