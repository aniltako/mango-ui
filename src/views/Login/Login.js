import React, { Component } from 'react';
import './styles.css'


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    handleChangeEmail = (e) => {
        this.setState({ username: e.target.value });
    }

    handleChangePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    handleLoginClick = () => {
        this.props.login(this.state.username, this.state.password);
    }

    handleSignUpClick = () => {
        this.props.history.push('/register')
    }

    render() {
        return (
            <div className="wrapper">
                <form className="form-signin">       
                    <h2 className="form-signin-heading">Please login</h2>
                    <input type="email" className="form-control"  placeholder="Email Address" autoFocus="" onChange={this.handleChangeEmail}/>
                    <input type="password" className="form-control" placeholder="Password" onChange={this.handleChangePassword}/>      
                        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
                    <label className="checkbox">
                    </label>
                    <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.handleLoginClick}>Log In</button>   
                    
                    <div className="wrapper-register">
                        <div className="inner" onClick={this.handleSignUpClick}>Sign Up</div>
                        <div className="inner">Forgot password?</div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
