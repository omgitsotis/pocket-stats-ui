import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateStats, getHomepage, getPocketToken, checkAuthenticated } from '../../store/actions';
import Homepage from './Homepage';

class HomepageContainer extends Component {
    componentDidMount() {
        this.props.getHomepage();
    }

    componentDidUpdate(prevProps) {
        if (this.props.link && prevProps.link === '') {
            var win = window.open(this.props.link, '_blank');
            win.focus();
            return
        }
    }

    render() {
        return <Homepage {...this.props}/>;
    }
}

const mapStateToProps = state => {
    const stats = state.stats.toJS();
    const auth = state.auth.toJS();

    return {
        isLoading:       stats.loading,
        callFailed:      stats.updateFailed,
        callSuccess:     stats.callSuccess,
        homepage:        stats.homepage,
        isAuthenticated: auth.isAuthenticated,
        loading:         auth.loading,
        link:            auth.link,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateStats: () => dispatch(updateStats()),
        getHomepage: () => dispatch(getHomepage()),
        getPocketToken: () => dispatch(getPocketToken()),
        checkAuthenticated: dispatch(checkAuthenticated())
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( HomepageContainer );
