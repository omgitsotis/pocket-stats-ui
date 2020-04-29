import React, { Component } from 'react';
import { connect } from 'react-redux';

import moment from 'moment';

import Advanced from './Advanced';
import { getStats } from '../../store/actions';
import { TimeRange } from '../../components/UI/Select/AdvancedSelect';


class AdvancedContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment().utc().startOf('w'),
      endDate: moment().utc().startOf('d'),
      filterValue: TimeRange.THIS_WEEK,
    }
  }

  componentDidMount() {
      this.props.getStats(
        this.state.startDate.startOf('d').unix(),
        this.state.endDate.startOf('d').unix()
      );
  }

  /* GetStats is the event handler for the date changed events */
  onDateChanged = (start, end) => {
    this.setState({
      startDate: start,
      endDate: end
    })

    // this.props.getStats(
    //   start.utc().startOf('d').unix(),
    //   end.utc().startOf('d').unix()
    // );
  }

  onAdvanceFilterChanged = (value) => {
    let start, end;

    switch (value) {
      case TimeRange.THIS_WEEK:
        start = moment().utc().startOf('w');
        end = moment().utc().startOf('d');
        break;
      case TimeRange.LAST_WEEK:
        start = moment().utc().startOf('w').subtract(7, 'd');
        end = moment().utc().startOf('w').subtract(1, 'd');
        break;
      case TimeRange.LAST_SEVEN_DAYS:
        start = moment().utc().startOf('d').subtract(7, 'd');
        end = moment().utc().startOf('d');
        break;
      case TimeRange.THIS_MONTH:
        start = moment().utc().startOf('M');
        end = moment().utc().startOf('d');
        break;
      case TimeRange.LAST_MONTH:
        start = moment().utc().startOf('M').subtract(1, 'M');
        end = moment().utc().startOf('M').subtract(1, 'd');
        break;
      case TimeRange.LAST_THIRTY_DAYS:
        start = moment().utc().startOf('d').subtract(30, 'd');
        end = moment().utc().startOf('d');
        break;
      case TimeRange.LAST_NINETY_DAYS:
        start = moment().utc().startOf('d').subtract(90, 'd');
        end = moment().utc().startOf('d');
        break;
      case TimeRange.YEAR_SO_FAR:
        start = moment().utc().startOf('y');
        end = moment().utc().startOf('d');
        break;
      case TimeRange.LAST_YEAR:
        start = moment().utc().startOf('y').subtract(1, 'y');
        end = moment().utc().startOf('y').subtract(1, 'd');
        break;
      case TimeRange.CUSTOM_RANGE:
        start = moment().utc().startOf('d').subtract(7);
        end = moment().utc().startOf('d');
        break;
      default:
        return;
    }

    this.setState({
      filterValue: value,
      startDate:   start,
      endDate:     end
    });
  }

  render() {
    return (
      <Advanced
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onAdvanceFilterChanged={this.onAdvanceFilterChanged}
        onDateChanged={this.onDateChanged}
        filterValue={this.state.filterValue}
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

export default connect( mapStateToProps, mapDispatchToProps )( AdvancedContainer );
