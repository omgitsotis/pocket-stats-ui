import React from 'react';
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import Statcard from '../../components/UI/Statcard/Statcard';
import Graph from '../../components/UI/Graph/HomepageGraph';

import css from './Homepage.css';
import theme from '../../components/theme';

const useStyles = makeStyles(theme => ({
  updateBtn : {
    marginTop: theme.spacing(4)
  },
  header: {
    marginBottom: theme.spacing(4),
    color: '#0C2231'
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
  const {
      isLoading,
      callFailed,
      callSuccess,
      homepage,
      updateStats,
      getPocketToken ,
      isAuthenticated
  } = props;
  const classes = useStyles();

  let component, graphComponent;
  if(callFailed) {
    component = <div>Failed to update stats</div>;
  } else if (callSuccess) {
    component = renderTotalStats(homepage.totals);
    const graphData = itemisedStatsToGraph(homepage.itemised);
    graphComponent = <Graph read={graphData.read} added={graphData.added}/>
  }

  let updateComponent = (
    <Button
      size="large"
      className={classes.updateBtn}
      color="primary"
      variant="contained"
      onClick={() => isAuthenticated ? updateStats() : getPocketToken()}
    >
      Update
    </Button>
  );

  if (isLoading) {
    updateComponent = <CircularProgress className={classes.updateBtn}/>
  }

  return (
    <div className={css.parent}>
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
            <div className={css.gridContainer}>
              {graphComponent}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}


export default Homepage
