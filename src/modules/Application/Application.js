import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import * as Action from './ApplicationAction';

class Application extends Component {

    render() {
        const props = this.props;
        const {classes} = props;

        return (
            <div className={'application ' + classes.root}>
                {this.props.name}
            </div>
        );
    }
}

Application.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    name: state.application.name
});

const mapDispatchToProps = (dispatch) => ({
    setForm: (payload) => dispatch(Action.setForm(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
