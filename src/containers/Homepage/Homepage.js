import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import { updateStats } from '../../store/actions';

class Homepage extends Component {
  render() {
    const {updateStats, isLoading, updateFailed, updateSuccess} = this.props;

    let component = (
      <Button
        title="Update Stats"
        clickHandler={updateStats}/>
      );
      
    if(isLoading) {
      component = <Spinner />;
    } else if(updateSuccess) {
      component = <div>Stats updating</div>;
    } else if(updateFailed) {
      component = <div>Failed to update stats</div>;
    }


    return (
      <div>
        <h1>Your stats</h1>
        {component}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const stateJS = state.stats.toJS()
  return {
    isLoading: stateJS.loading,
    updateFailed: stateJS.updateFailed,
    updateSuccess: stateJS.updateSuccess
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateStats: () => dispatch(updateStats())
  };
}

export default connect( mapStateToProps, mapDispatchToProps )( Homepage );
