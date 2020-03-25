import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  paper: {
    height: 180,
    borderRadius: 3,
    textAlign: "center"
  },
  title: {
    paddingTop: 15,
    paddingBottom: 24
  }
}

const Statcard = ({title, value, classes, bodyVariant}) => (
  <Paper className={classes.paper}>
    <Typography className={classes.title} variant="h5" component="h3">
      {title}
    </Typography>
    <Typography variant="h3" component="body1">{value}</Typography>
  </Paper>
)

export default withStyles(styles)(Statcard)
