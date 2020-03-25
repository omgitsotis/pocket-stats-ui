import React from 'react';
import MomentUtils from '@date-io/moment';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider, DatePicker} from '@material-ui/pickers';
import Typography from '@material-ui/core/Typography';

import Statcard from '../../components/UI/Statcard/Statcard';

const useStyles = makeStyles(theme => ({
  header: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4)
  },
}));

const formatReadTime = (readTime) => {
  const d = Math.floor(readTime / 1440); // 60*24
  const h = Math.floor((readTime - (d * 1440)) / 60);
  const m = Math.round(readTime % 60);

  const dayLabel = d === 1 ? "day" : "days";
  const hourLabel = h === 1 ? "hour" : "hours";
  const minuteLabel = m === 1 ? "minute" : "minutes";

  if(d > 0){
    return(`${d} ${dayLabel}, ${h} ${hourLabel}, ${m} ${minuteLabel}`);
  } else if (h > 0){
    return(`${h} ${hourLabel}, ${m} ${minuteLabel}`);
  } else {
      return(`${m} ${minuteLabel}`);
  }
}

const formatTitle = (title) => {
  if (title === "") {
    return "Untagged";
  }

  if (title === "tv") {
    return "TV"
  }

  if (title === "movie") {
    return "Movies"
  }

  return title.charAt(0).toUpperCase() + title.slice(1);
}

const renderTotalStats = (tags, classes) => {
  if (typeof(tags) === "undefined") {
    return (
      <div>"Nothing to see here"</div>
    );
  }

  const body = Object.entries(tags).map(([key, value], i) => (
    <Grid container spacing={3}>
      <Grid item md={12} sm={12}>
        <Typography variant ="h2" className={classes.header}>{formatTitle(key)}</Typography>
      </Grid>
      <Grid container spacing={3}>
        <Grid item md={4} xs={4} >
          <Statcard title="Articles Read" value={value.articles_read} />
        </Grid>
        <Grid item md={4} xs={4} >
          <Statcard title="Words Read" value={value.words_read} />
        </Grid>
        <Grid item md={4} xs={4} >
          <Statcard title="Time spent reading" value={formatReadTime(value.time_read)} />
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <div>
      {body}
    </div>
  )
}

const Tags = ({stats, callFailed, isLoading, startDate, endDate, onDateChanged}) => {
  const classes = useStyles();

  let body = <CircularProgress />;
  if (!isLoading) {
    body = renderTotalStats(stats.tags, classes);
  }

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Typography variant ="h2">Advanced Stats</Typography>
        </Grid>
        <Grid item sm={12}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Grid container justify="space-around">
              <DatePicker
                variant="inline"
                format="DD/MM/YYYY"
                margin="normal"
                id="date-picker-inline"
                label="Start date"
                disableFuture
                value={startDate}
                onChange={(date) => onDateChanged(date, endDate)}
              />
              <DatePicker
                margin="normal"
                id="date-picker-dialog"
                label="End date"
                format="DD/MM/YYYY"
                disableFuture
                value={endDate}
                onChange={(date) => onDateChanged(startDate, date)}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item sm={12}>
          {body}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Tags;
