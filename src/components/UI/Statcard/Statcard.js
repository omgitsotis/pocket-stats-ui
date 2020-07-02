import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  paper: {
    height: 180,
    borderRadius: 3,
    textAlign: "center",
  },
  title: {
    paddingTop: 36,
    paddingBottom: 24,
    color: `#0C2231`
  }
}

const Statcard = ({title, value, classes, bodyVariant}) => (
  <div style={{backgroundColor: "#F1F3F8"}}>
    <Grid item sm={12} className={classes.paper}>
      <Typography className={classes.title} variant="h5" component="h3">
        {title}
      </Typography>
      <Typography variant="h3" component="body1">{value}</Typography>
    </Grid>
  </div>
);

export default withStyles(styles)(Statcard)
