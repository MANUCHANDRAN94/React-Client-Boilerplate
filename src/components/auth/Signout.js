import React , { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions';

class Signout extends Component{
    componentDidMount(){
        this.props.signout();
    }
    render(){
        return(
            <div>
                Sorry to seeyou go.. miss you!
            </div>
        )
    }
}

export default connect(null,action)(Signout);