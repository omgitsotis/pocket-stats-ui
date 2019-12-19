import React from 'react';
import moment from 'moment';
import MomentUtils from '@date-io/moment';

import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import { MuiPickersUtilsProvider, DatePicker} from '@material-ui/pickers';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

import DateSelect from '../../components/UI/Select/DateSelect';
import {FilterSelect, FilterValues} from '../../components/UI/Select/FilterSelect';
import Graph from '../../components/UI/Graph/Graph';



const itemisedStatsToGraphData = (itemisedStats, val) => {
  let data = []
  console.log("itemisedStatsToGraphData", typeof(val))
  for (let [day, entry] of Object.entries(itemisedStats)) {
    var dateObj = moment.unix(day).utc().toDate();
    console.log("itemisedStatsToGraphData for loop", val)
    switch (val) {
      case FilterValues.ARTICLES_READ:
        data.push({x: dateObj, y: entry.articles_read})
        break;
      case FilterValues.ARTICLES_ADDED:
        data.push({x: dateObj, y: entry.articles_added})
        break;
      case FilterValues.WORDS_ADDED:
        data.push({x: dateObj, y: entry.words_read})
        break;
      case FilterValues.WORDS_READ:
        data.push({x: dateObj, y: entry.words_added})
        break;
      case FilterValues.TIME_SPENT:
        data.push({x: dateObj, y: entry.time_read})
        break;
      case FilterValues.TIME_ADDED:
        data.push({x: dateObj, y: entry.time_added})
        break;
      default:
        console.log("unknown filter type: "+ val)
        return;
    }
  }

  return data;
}

const Graphs = ({startDate, endDate, onDateChanged, stats, filterValue, onFilterChanged}) => {
  let data = []

  if (typeof(stats) !== 'undefined') {
    console.log("Graphs.Render", typeof(filterValue))
    data = itemisedStatsToGraphData(stats, filterValue);
  }

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Typography variant ="h2">Graphs</Typography>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item sm={6} container direction="row" justify="center" alignItems="center">
            <FilterSelect value={filterValue} onFilterChanged={onFilterChanged} />
          </Grid>
          <DateSelect startDate={startDate} endDate={endDate} onDateChanged={onDateChanged} size={6} />
        </Grid>
        <Grid item sm={12}>
          <Graph data={data} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Graphs;
