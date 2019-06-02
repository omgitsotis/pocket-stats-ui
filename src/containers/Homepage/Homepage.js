import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import { updateStats, getStats } from '../../store/actions';

class Homepage extends Component {
    componentDidMount() {
        const endDate = moment.utc().startOf('day').unix();
        const startDate = moment.unix(endDate).utc().subtract(7, 'days').unix();
        this.props.getStats(startDate, endDate);
    }

    render() {
        const {isLoading, callFailed, callSuccess } = this.props;

        let component = <Spinner />;

        if(callFailed) {
            component = <div>Failed to update stats</div>;
        } else if (callSuccess) {
            component = this.renderTotalStats();
        }

        return (
            <div>
                <h1>Stats</h1>
                {component}
            </div>
        );
    }

    renderTotalStats() {
        const totalStats = this.props.totalStats
        return (
            <div>
                <div>
                    <h2>Articles Read</h2>
                    <p>{totalStats.articles_read}</p>
                </div>
                <div>
                    <h2>Articles Added</h2>
                    <p>{totalStats.articles_added}</p>
                </div>
                <div>
                    <h2>Words Read</h2>
                    <p>{totalStats.words_read}</p>
                </div>
                <div>
                    <h2>Word Added</h2>
                    <p>{totalStats.words_added}</p>
                </div>
                <div>
                    <h2>Time Read</h2>
                    <p>{totalStats.time_read}</p>
                </div>
                <div>
                    <h2>Time Added</h2>
                    <p>{totalStats.time_added}</p>
                </div>
            </div>
        )
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

export default connect( mapStateToProps, mapDispatchToProps )( Homepage );
