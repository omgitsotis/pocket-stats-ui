import React from 'react'
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import css from './Advanced.css';
import Theme from '../../theme';

const useStyles = makeStyles(theme => ({
  grid: {
    paddingTop: 15,
    textAlign: 'center',
    color: Theme.text
  },
  diff: {
    paddingTop: 32,
  }
}));

export const Totals = ({read, added, read_previous, added_previous, label}) => {
    const classes = useStyles();

    const diff =  read - added;
    const prevDiff = read_previous - added_previous;

    return (
      <div className={css.grid}>
        <Grid container>
          <Grid item sm={4}>
            <Typography variant="h4" className={classes.grid}>
              {`${label} Read`}
            </Typography>
            <StatValue value={read} valuePrevious={read_previous} />
          </Grid>
          <Grid item sm={4}>
            <Typography variant="h4" className={classes.grid}>
                {`${label} Added`}
            </Typography>
            <StatValue value={added} valuePrevious={added_previous} />
          </Grid>
          <Grid item sm={4}>
            <Typography variant="h4" className={classes.grid}>
              Difference
            </Typography>
            <DiffValue value={diff} valuePrevious={prevDiff} />
          </Grid>
        </Grid>
      </div>
    )
}

const StatValue = ({value, valuePrevious}) => {
  const classes = useStyles();

  let trendArrow = (
    <span className={clsx(css.icon, css.iconUp)}>
      <ion-icon name="arrow-up"></ion-icon>
    </span>
  )

  let arrow = (
    <span className={clsx(css.icon, css.iconUp)}>
      <ion-icon name="arrow-up"></ion-icon>
    </span>
  );

  let diff = value - valuePrevious

  if (diff < 0) {
    arrow = (
      <span className={clsx(css.icon, css.iconDown)}>
        <ion-icon name="arrow-down"></ion-icon>
      </span>
    );

    diff *= -1
  }

  return (
    <div className={css.valueBox}>
      <Typography variant="h3" className={classes.grid}>
        {value}
      </Typography>
      {arrow}
      <Typography variant="h5" className={clsx(classes.grid, classes.diff)}>
        {diff}
      </Typography>
    </div>
  );
}

const DiffValue = ({value, valuePrevious}) => {
  const classes = useStyles();

  let trendArrow = (
    <span className={clsx(css.iconLarge, css.iconUp)}>
      <ion-icon name="arrow-down"></ion-icon>
    </span>
  );

  if (value < 0) {
    trendArrow = (
      <span className={clsx(css.iconLarge, css.iconDown)}>
        <ion-icon name="arrow-up"></ion-icon>
      </span>
    );

    value *= -1;
  }

  let arrow = (
    <span className={clsx(css.icon, css.iconUp)}>
      <ion-icon name="arrow-up"></ion-icon>
    </span>
  );

  let diff = value - valuePrevious;

  if (diff < 0) {
    arrow = (
      <span className={clsx(css.icon, css.iconDown)}>
        <ion-icon name="arrow-down"></ion-icon>
      </span>
    );

    diff *= -1;
  }

  return (
    <div className={css.valueBox}>
      {trendArrow}
      <Typography variant="h3" className={classes.grid}>
        {value}
      </Typography>
      {arrow}
      <Typography variant="h5" className={clsx(classes.grid, classes.diff)}>
        {diff}
      </Typography>
    </div>
  );
}
