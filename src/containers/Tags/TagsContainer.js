import React, { Component } from 'react';
import { connect } from 'react-redux';

import moment from 'moment';

import Tags from './Tags';
import { getStats } from '../../store/actions';


class TagsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment().subtract(7, 'days'),
      endDate: moment()
    }
  }

  componentDidMount() {
      this.props.getStats(
        this.state.startDate.startOf('day').unix(),
        this.state.endDate.startOf('day').unix()
      );
  }

  /* GetStats is the event handler for the date changed events */
  onDateChanged = (start, end) => {
    this.setState({
      startDate: start,
      endDate: end
    })

    this.props.getStats(
      start.utc().startOf('day').unix(),
      end.utc().startOf('day').unix()
    );
  }

  render() {
    return (
      <Tags
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onDateChanged={this.onDateChanged}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = state => {
    const stateJS = state.stats.toJS()
    return {
        isLoading:      stateJS.loading,
        callFailed:     stateJS.updateFailed,
        callSuccess:    stateJS.callSuccess,
        stats:          stateJS.statsPage
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getStats: (startDate, endDate) => dispatch(getStats(startDate, endDate))
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( TagsContainer );
