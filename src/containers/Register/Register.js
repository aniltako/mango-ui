import { connect } from 'react-redux';
import { registerUser } from '../../actions/userActions';

import Register from '../../views/Register/';

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
        
        registerUser: (user) => {
            dispatch(registerUser(user));
        }
    }
}

/**
 *  connects the data in mapStateToProps() (the data portion of the state) to the "Register" component
 *  mapDispatchToProps adds new props that points to action creators 
 */
const RegisterContainer = connect(mapStateToProps, mapDispatchToProps, null)(Register)

export default RegisterContainer
