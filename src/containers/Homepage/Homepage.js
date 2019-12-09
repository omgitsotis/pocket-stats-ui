import React from 'react';
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import Statcard from '../../components/UI/Statcard/Statcard';
import Graph from '../../components/UI/Graph/Graph';


const useStyles = makeStyles(theme => ({
  updateBtn : {
    marginTop: theme.spacing(4)
  },
  header: {
    marginBottom: theme.spacing(4)
  },
}));

const renderTotalStats = (totalStats) => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item md={3} xs={6} >
          <Statcard title="Articles Read" value={totalStats.articles_read} />
        </Grid>
        <Grid item md={3} xs={6}>
          <Statcard title="Articles Added" value={totalStats.articles_added} />
        </Grid>
        <Grid item md={3} xs={6}>
          <Statcard title="Words Read" value={totalStats.words_read} />
        </Grid>
        <Grid item md={3} xs={6}>
          <Statcard title="Words Added" value={totalStats.words_added} />
        </Grid>
      </Grid>
    </div>
  )
}

const itemisedStatsToGraph = (itemisedStats) => {
  let readData = []
  let addData = []
  for (let [day, entry] of Object.entries(itemisedStats)) {
    var dayStr = moment.unix(day).utc().format("Do MMM");
    readData.push({x: dayStr, y: entry.articles_read});
    addData.push({x: dayStr, y: entry.articles_added});
  }

  return {read: readData, added: addData}
}

const Homepage = (props) => {
  const {isLoading, callFailed, callSuccess, totalStats, itemisedStats, updateStats } = props;
  const classes = useStyles();

  let component;
  if(callFailed) {
    component = <div>Failed to update stats</div>;
  } else if (callSuccess) {
    component = renderTotalStats(totalStats);
  }

  let updateComponent = (
    <Button
      size="large"
      className={classes.updateBtn}
      color="primary"
      variant="contained"
      onClick={() => updateStats()}
    >
      Update
    </Button>
  );

  if (isLoading) {
    updateComponent = <CircularProgress className={classes.updateBtn}/>
  }

  const graphData = itemisedStatsToGraph(itemisedStats);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item sm={10}>
          <Typography className={classes.header} variant ="h2">Stats</Typography>
        </Grid>
        <Grid>
          {updateComponent}
        </Grid>
        <Grid item xs={12}>
          {component}
        </Grid>
        <Grid item xs={12}>
          <Graph read={graphData.read} added={graphData.added}/>
        </Grid>
      </Grid>
    </Container>
  );
}


export default Homepage
