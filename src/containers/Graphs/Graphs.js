import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import DateSelect from '../../components/UI/DateSelect/DateSelect';

const Graphs = ({startDate, endDate, onDateChanged}) => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Typography variant ="h2">Graphs</Typography>
        </Grid>
        <DateSelect startDate={startDate} endDate={endDate} onDateChanged={onDateChanged} />
      </Grid>
    </Container>
  )
}

export default Graphs;
