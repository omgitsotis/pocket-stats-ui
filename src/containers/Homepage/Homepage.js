import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Spinner from  '../../components/UI/Spinner/Spinner';
import Statcard from '../../components/UI/Statcard/Statcard'


const styles = {
  updateBtn : {
    marginTop: 24
  },
  header: {
    marginBottom: 24
  }
};

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

const Homepage = (props) => {
  const {isLoading, callFailed, callSuccess, classes } = props;
  let component = <Spinner />;

  if(callFailed) {
    component = <div>Failed to update stats</div>;
  } else if (callSuccess) {
    component = renderTotalStats(props.totalStats);
  }

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item sm={10}>
          <Typography className={classes.header} variant ="h2">Stats</Typography>
        </Grid>
        <Grid>
          <Button
            size="large"
            className={classes.updateBtn}
            color="primary"
            variant="contained"
            onClick={() => this.props.updateStats()}
          >
            Update
          </Button>
        </Grid>
      </Grid>
      {component}
    </Container>
  );
}


export default withStyles(styles)(Homepage)
