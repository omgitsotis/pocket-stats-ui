import React from 'react';
import MomentUtils from '@date-io/moment';

import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider, DatePicker} from '@material-ui/pickers';
import Typography from '@material-ui/core/Typography';

import Statcard from '../../components/UI/Statcard/Statcard';

const formatReadTime = (readTime) => {
  const d = Math.floor(readTime / 1440); // 60*24
  const h = Math.floor((readTime - (d * 1440)) / 60);
  const m = Math.round(readTime % 60);

  const dayLabel = d === 1 ? "day" : "days";
  const hourLabel = h === 1 ? "hour" : "hours";
  const minuteLabel = m === 1 ? "minute" : "minutes";

  if(d>0){
    return(`${d} ${dayLabel}, ${h} ${hourLabel}, ${m} ${minuteLabel}`);
  } else{
    return(`${h} ${hourLabel}, ${m} ${minuteLabel}`);
  }
}

const renderTotalStats = (totals) => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item md={6} xs={6} >
          <Statcard title="Articles Read" value={totals.articles_read} />
        </Grid>
        <Grid item md={6} xs={6}>
          <Statcard title="Articles Added" value={totals.articles_added} />
        </Grid>
        <Grid item md={6} xs={6}>
          <Statcard title="Words Read" value={totals.words_read} />
        </Grid>
        <Grid item md={6} xs={6}>
          <Statcard title="Words Added" value={totals.words_added} />
        </Grid>
        <Grid item md={6} xs={6}>
          <Statcard title="Reading time spent" value={formatReadTime(totals.time_read)} />
        </Grid>
        <Grid item md={6} xs={6}>
          <Statcard title="Reading time added" value={formatReadTime(totals.time_added)} />
        </Grid>
      </Grid>
    </div>
  )
}

const Advanced = ({stats, callFailed, isLoading, startDate, endDate, onDateChanged}) => {
  let body;
  if (isLoading) {
    body = <CircularProgress />
  } else {
    body = renderTotalStats(stats.totals);
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

export default Advanced;
