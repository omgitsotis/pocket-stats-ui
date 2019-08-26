import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import { updateStats, getStats } from '../../store/actions';
import Homepage from './Homepage';

class HomepageContainer extends Component {
    componentDidMount() {
        const endDate = moment.utc().startOf('day').unix();
        const startDate = moment.unix(endDate).utc().subtract(7, 'days').unix();
        this.props.getStats(startDate, endDate);
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
        totalStats:     stateJS.totalStats,
        itemisedStats:  stateJS.itemisedStats
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateStats: () => dispatch(updateStats()),
        getStats: (startDate, endDate) => dispatch(getStats(startDate, endDate))
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( HomepageContainer );
