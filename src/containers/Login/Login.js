import { connect } from 'react-redux';

import Login from '../../views/Login/';

import {
    login,
} from '../../actions/userActions'

/**
 * returns new prop so that in our "Users" component,
 * the new prop will be the prop that is referred
 * @param {*} state 
 */
const mapStateToProps = (state) => {
    return {
		user: state.userReducer.user,
    }
}

/**
 * returns the dispatching of an actions from the action creators 
 * fetch data and share the data across the "Users" components accessing with same name
 * @param {*} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => {
            dispatch(login(username, password));
        }
    }
}

/**
 *  connects the data in mapStateToProps() (the data portion of the state) to the "User" component
 *  mapDispatchToProps adds new props that points to action creators 
 */
const LoginContainer = connect(mapStateToProps, mapDispatchToProps, null)(Login)

export default LoginContainer
