import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import { updateStats, getHomepage } from '../../store/actions';
import Homepage from './Homepage';

class HomepageContainer extends Component {
    componentDidMount() {
        this.props.getHomepage();
    }

    render() {
        return <Homepage {...this.props}/>;
    }
}

const mapStateToProps = state => {
    const stateJS = state.stats.toJS()
    return {
        isLoading:      stateJS.loading,
        callFailed:     stateJS.updateFailed,
        callSuccess:    stateJS.callSuccess,
        homepage:       stateJS.homepage
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateStats: () => dispatch(updateStats()),
        getHomepage: () => dispatch(getHomepage())
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( HomepageContainer );
