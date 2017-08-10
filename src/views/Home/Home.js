import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Header from '../../components/Header/';
import Footer from '../../components/Footer/';

class Home extends Component {    

    render() {
        return (
            <div className="app">
                <Header {...this.props}/>
                <div className="app-body">
                    <main className="main">
                        <div className="container-fluid">
                            <Switch>
                                <Route exact path="/home" render={props => <h5>Home</h5>}/>
                                
                                <Redirect to="/"/>
                            </Switch>
                        </div>
                    </main>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;