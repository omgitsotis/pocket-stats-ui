import React from 'react';
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import DateSelect from '../../components/UI/Select/DateSelect';
import {FilterSelect, FilterValues} from '../../components/UI/Select/FilterSelect';
import Graph from '../../components/UI/Graph/Graph';
import { TagPie } from '../../components/UI/Graph/Tag';

const useStyles = makeStyles(theme => ({
  header: {
    marginTop: theme.spacing(2)
  },
}));

const statsToGraph = (stats, val) => {
  switch (val) {
    case FilterValues.ARTICLES_READ:
    case FilterValues.ARTICLES_ADDED:
    case FilterValues.WORDS_READ:
    case FilterValues.WORDS_ADDED:
    case FilterValues.TIME_SPENT:
    case FilterValues.TIME_ADDED:
      return itemisedStatsToGraph(stats.itemised, val);
    case FilterValues.TAGS_READ:
    case FilterValues.TAGS_WORDS:
    case FilterValues.TAGS_TIME:
      return tagStatsToGraph(stats, val)
    default:
      console.error("unknown filter type: "+ val)
      return;
  }
}

const itemisedStatsToGraph = (itemised, val) => {
  let data = [];
  if (typeof(itemised) === 'undefined') {
    return data;
  }

  for (let [day, entry] of Object.entries(itemised)) {
    var dateObj = moment.unix(day).utc().toDate();
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
        console.error("unknown filter type: "+ val)
        return;
    }
  }
  return <Graph data={data} />;
}

const tagStatsToGraph = (stats, val) => {
  let data = [];

  for (let [tag, entry] of Object.entries(stats.tags)) {
    switch (val) {
      case FilterValues.TAGS_READ:
          if (tag !== "") {
            data.push({x: tag, y: entry.articles_read});
          } else {
            data.push({x: "untagged", y: entry.articles_read});
          }
        break;
      case FilterValues.TAGS_WORDS:
        if (tag !== "") {
          data.push({x: tag, y: entry.words_read})
        }else {
          data.push({x: "untagged", y: entry.words_read});
        }
        break;
      case FilterValues.TAGS_TIME:
        if (tag !== "") {
          data.push({x: tag, y: entry.time_read})
        }else {
          data.push({x: "untagged", y: entry.time_read});
        }
        break;
      default:
        console.error("unknown filter type: "+ val)
        return;
    }
  }

  return <TagPie data={data} />;
}

const Graphs = ({startDate, endDate, onDateChanged, stats, filterValue, onFilterChanged}) => {
  const classes = useStyles();
  let graph;

  if (typeof(stats) !== 'undefined') {
    graph = statsToGraph(stats, filterValue);
  }

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Typography variant ="h2" className={classes.header}>Graphs</Typography>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item sm={6} container direction="row" justify="center" alignItems="center">
            <FilterSelect value={filterValue} onFilterChanged={onFilterChanged} />
          </Grid>
          <DateSelect startDate={startDate} endDate={endDate} onDateChanged={onDateChanged} size={6} />
        </Grid>
        <Grid item sm={12}>
          {graph}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Graphs;
