import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import GoogleAuthButton from './GoogleAuthButton';
import Payment from './Payment';

class Header extends React.Component{
    renderContent(){
        switch(this.props.auth){
            case null:
                return;
            case false:
                return (
                    <li><GoogleAuthButton /></li>
                );
            default:
                return (
                    [
                        <li key="1"><Payment /></li>,
                        <li key="2" style={{marginLeft:"15px"}}>Credits: {this.props.auth.credits}</li>,
                        <li key="3"><a href="/api/logout">Logout</a></li>
                    ]
                );
        }
    }
    render(){
        console.log("Inside Header Comp",this.props.auth);
        return(
            <nav style={{backgroundColor:"#4267b2"}}>
                <div className="nav-wrapper">
                <Link 
                    to={this.props.auth?'/surveys':'/'}
                    className="brand-logo"
                >
                    EmailY
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {this.renderContent()}
                </ul>
                </div>
            </nav>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Header);