import React from 'react';
import MomentUtils from '@date-io/moment';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { MuiPickersUtilsProvider, DatePicker} from '@material-ui/pickers';

export const TimeRange = {
  THIS_WEEK:        "0",
  LAST_WEEK:        "1",
  LAST_SEVEN_DAYS:  "2",
  THIS_MONTH:       "3",
  LAST_MONTH:       "4",
  LAST_THIRTY_DAYS: "5",
  LAST_NINETY_DAYS: "6",
  YEAR_SO_FAR:      "7",
  LAST_YEAR:        "8",
  CUSTOM_RANGE:     "9"
};

const useStyles = makeStyles(theme => ({
  label: {
    color: '#0C2231'
  },
  lookbackSelect: {
    width: 400,
    color: '#0C2231'
  },
  container: {
    marginTop: theme.spacing(1)
  },
  datePicker: {
    marginTop: 1,
    paddingRight: theme.spacing(3)
  }
}));

export const AdvancedSelect = ({value, onFilterChange, onDateChanged, startDate, endDate}) => {
  const classes = useStyles();

  const filter = (
    <Grid item sm={6}>
      <FormControl color="secondary" fullwidth>
        <InputLabel className={classes.label} htmlFor="advanced-native-simple">Lookback</InputLabel>
        <Select
          native
          value={value}
          className={classes.lookbackSelect}
          onChange={(event) => onFilterChange(event.target.value)}
          inputProps={{ name: 'filter', id: 'filter-native-simple' }}
        >
          <option value={TimeRange.LAST_WEEK}>Last Week</option>
          <option value={TimeRange.THIS_WEEK}>This Week</option>
          <option value={TimeRange.LAST_SEVEN_DAYS}>Last 7 Days</option>
          <option value={TimeRange.THIS_MONTH}>This Month</option>
          <option value={TimeRange.LAST_MONTH}>Last Month</option>
          <option value={TimeRange.LAST_THIRTY_DAYS}>Last 30 Days</option>
          <option value={TimeRange.LAST_NINETY_DAYS}>Last 90 Days</option>
          <option value={TimeRange.YEAR_SO_FAR}>This Year</option>
          <option value={TimeRange.LAST_YEAR}>Last Year</option>
          <option value={TimeRange.CUSTOM_RANGE}>Custom Range</option>
        </Select>
      </FormControl>
    </Grid>
  )

  let dateRange;
  if (value === TimeRange.CUSTOM_RANGE) {
    dateRange = (
      <Grid item sm={6}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Grid container>
            <DatePicker
              className={classes.datePicker}
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
              className={classes.datePicker}
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
    )
  }

  return (
    <Grid container spacing={3} className={classes.container}>
      {filter}
      {dateRange}
    </Grid>
  );
};
