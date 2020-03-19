import React, {Component} from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { getStats } from '../../store/actions';
import Graphs from './Graphs';


class GraphsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment().subtract(7, 'days'),
      endDate: moment(),
      filterValue: 1,
    }
  }

  componentDidMount() {
      this.props.getStats(
        this.state.startDate.startOf('day').unix(),
        this.state.endDate.startOf('day').unix()
      );
  }

  onDateChanged = (start, end) => {
    this.setState({
      startDate: start,
      endDate: end
    });

    this.props.getStats(
      start.utc().startOf('day').unix(),
      end.utc().startOf('day').unix()
    );
  }

  onFilterChanged = (value) => {
    this.setState({filterValue: parseInt(value, 10)})
  }

  render() {
    return (
      <Graphs
        stats={this.props.stats.itemised}
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onDateChanged={this.onDateChanged}
        filterValue={this.state.filterValue}
        onFilterChanged={this.onFilterChanged}
      />
    );
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

export default connect( mapStateToProps, mapDispatchToProps )( GraphsContainer );
