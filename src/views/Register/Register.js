import React, { Component } from 'react';
import './styles.css'


class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: ''
        };
    }

    handleChangeUsername = (e) => {
        this.setState({ username: e.target.value });
    }

    handleChangeEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    handleChangePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    handleRegisterClick = () => {
        this.props.login(this.state.username, this.state.email, this.state.password);
    }

    handleLoginClick = () => {
        this.props.history.push('/login')
    }

    render() {
        return (
            <div className="wrapper">
                <form className="form-signin">       
                    <h2 className="form-signin-heading">Register</h2>
                    <input type="text" className="form-control"  placeholder="User Name" autoFocus="" onChange={this.handleChangeUsername}/>                    
                    <input type="email" className="form-control"  placeholder="Email Address" onChange={this.handleChangeEmail}/>
                    <input type="password" className="form-control" placeholder="Password" onChange={this.handleChangePassword}/>      
                    <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
                    <label className="checkbox">
                    </label>
                    <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.handleRegister}>Sign Up</button>   
                    
                    <div className="wrapper-register">
                        <div className="inner" onClick={this.handleLoginClick}>Log In</div>
                        <div className="inner">Forgot password?</div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;
