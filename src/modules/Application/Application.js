import React, {Component} from 'react';
import {connect} from "react-redux";
import * as Actions from './ApplicationActions';

class Application extends Component {

    render() {
        return (
            <div className='application'>
                {this.props.name}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    name: state.application.name
});

const mapDispatchToProps = (dispatch) => ({
    setErrors : ( payload ) => dispatch ( Actions.setErrors(  payload ) )
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
