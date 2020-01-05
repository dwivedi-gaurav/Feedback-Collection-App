import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import {fetchUser} from '../actions';
import Landing from './Landing';

const Dashboard=()=><h2>Dashboard</h2>
const SurveyNew=()=><h2>SurveyNew</h2>

class App extends React.Component{
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return (
            <BrowserRouter>
                <Header />
                <div className="container">
                    <Route path="/" exact component={Landing} />
                    <Route path="/surveys" exact component={Dashboard} />
                    <Route path="/surveys/new" component={SurveyNew} />
                </div>
            </BrowserRouter>
        );
    }
}
const mapStateToProps=(state)=>{
    return {
        auth:state.auth
    }
}
export default connect(mapStateToProps,{fetchUser})(App);