import Head from 'next/head'
import { useEffect, useState } from 'react'
const { DateTime } = require("luxon");

// import useRequest from '../libs/useRequest';
import axios from '../libs/axios'
import { DROPDOWN_RELATIVE, DROPDOWN_ABSOLUTE} from '../libs/const';

import Layout from '../components/Layout/Layout'
import Statbar from '../components/UI/Stats/Statbar'
import DropdownButton from '../components/UI/Button/DropdownButton';
import TimeRange from '../components/UI/Stats/TimeRange/TimeRange';

export default function Stats() {
  const [state, setState] = useState({
    startDate: DateTime.local().toUTC().startOf('day').minus({days: 7}),
    endDate: DateTime.local().toUTC().startOf('day'),
    dropdown: DROPDOWN_RELATIVE,
    relativeValue: "7",
    data: {},
  });

  const getStats = (start, end) => {
    axios.get(`/stats/total?start=${start}&end=${end}`)
      .then(response => {
        console.log(response.data);
        setState({
          ...state,
          data: response.data,
        })
      })
      .catch(error => onError(error, "couldn't get stats"))
  }

  const onError = (err, message) => {
    console.error(err)
  }

  const onDateChanged = (field, date) => {
    switch (field) {
      case "start":
        setState({
          ...state,
          startDate: DateTime.fromISO(date)
        });

        break;
      case "end":
        setState({
          ...state,
          endDate: DateTime.fromISO(date)
        });

        break;
      default:
        return;
    }
  }

  const onDropdownChanged = (field) => {
    switch (field) {
      case "relative":
        setState({ 
          ...state, 
          dropdown: DROPDOWN_RELATIVE
        });
        break;
        case "absolute":
        setState({ 
          ...state, 
          dropdown: DROPDOWN_ABSOLUTE
        });
      default:
        return;
    }
  }

  const onRelativeChanged = (value) => {
    switch (value) {
      case "7":
        setState({
          ...state,
          relativeValue: value,
          startDate: DateTime.local().toUTC().startOf('day').minus({ days: 7 })
        });
        break;
      
      case "14":
        setState({
          ...state,
          relativeValue: value,
          startDate: DateTime.local().toUTC().startOf('day').minus({ days: 14 })
        });
        break;

      case "30":
        setState({
          ...state,
          relativeValue: value,
          startDate: DateTime.local().toUTC().startOf('day').minus({ days: 30 })
        });
        break;

      case "60":
        setState({
          ...state,
          relativeValue: value,
          startDate: DateTime.local().toUTC().startOf('day').minus({ days: 60 })
        });
        break;

      case "90":
        setState({
          ...state,
          relativeValue: value,
          startDate: DateTime.local().toUTC().startOf('day').minus({ days: 90 })
        });
        break;

      case "365":
        setState({
          ...state,
          relativeValue: value,
          startDate: DateTime.local().toUTC().startOf('day').minus({ days: 365 })
        });
        break;
      
      default:
        return;
    }
  }

  // Call getStats whenever the start and end dates are changes
  useEffect(() => { 
    getStats(state.startDate.toSeconds(), state.endDate.toSeconds()); 
  }, [state.startDate, state.endDate])

  return (
    <div className="container">
      <Head>
        <title>Total Stats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="content text-center">
          <div style={{margin: 'auto'}}>
            <div className="frame">
              <div className="frame__body" style={{"overflow":"hidden"}}>
                <div className="row p-0 level fill-height">
                  <div className="col-10">
                    <h1 className="headline-4">Stats</h1>
                  </div>
                </div>
                <div className="divider"/>
                <div className="row p-0 level fill-height">
                  <div className="col-1">
                    <DropdownButton state={state.dropdown} onSelected={onDropdownChanged}/>
                  </div>
                  <TimeRange
                    startDate={state.startDate} 
                    endDate={state.endDate}  
                    dropdownState={state.dropdown} 
                    onDateChanged={onDateChanged}
                    relativeValue={state.relativeValue}
                    onRelativeChanged={onRelativeChanged}
                  />
                </div>
                <div className="divider"/>
                <Statbar 
                  statType="Articles" 
                  read={state.data.totals ? state.data.totals.articles_read : 0} 
                  added={state.data.totals ? state.data.totals.articles_added : 0} 
                />
                <Statbar 
                  statType="Words" 
                  read={state.data.totals ? state.data.totals.words_read : 0} 
                  added={state.data.totals ? state.data.totals.words_added : 0} 
                />
                <Statbar 
                  statType="Time" 
                  read={state.data.totals ? state.data.totals.time_read : 0} 
                  added={state.data.totals ? state.data.totals.time_added : 0} 
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
