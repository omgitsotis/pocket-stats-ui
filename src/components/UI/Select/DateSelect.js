import React from 'react';
import Grid from '@material-ui/core/Grid';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, DatePicker} from '@material-ui/pickers';

const DateSelect = ({startDate, endDate, onDateChanged, size}) => (
  <Grid item sm={size}>
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
)

export default DateSelect;
