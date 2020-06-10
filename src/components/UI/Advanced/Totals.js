import React from 'react'
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import css from './Advanced.css';

const useStyles = makeStyles(theme => ({
  label: {
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: 'center',
  },
  value: {
    textAlign: 'center',
    paddingBottom: 15,
  },
  title: {
    color: `#EFF8F3`
  },
  grid: {
    color: `#F3BAC3`
  },
  diff: {
    textAlign: 'center',
    paddingTop: 18,
  }
}));

export const Totals = ({read, added, read_previous, added_previous, label}) => {
    const classes = useStyles();

    const diff =  read - added;
    const prevDiff = read_previous - added_previous;
    // const diff =  added - read;
    // const prevDiff = added_previous - read_previous;

    return (
      <div className={css.grid}>
        <Grid container>
          <Grid item sm={4}>
            <Typography variant="h4" className={clsx(classes.grid, classes.label)}>
              {`${label} Read`}
            </Typography>
            <StatValue value={read} valuePrevious={read_previous} />
          </Grid>
          <Grid item sm={4}>
            <Typography variant="h4" className={clsx(classes.grid, classes.label)}>
                {`${label} Added`}
            </Typography>
            <StatValue value={added} valuePrevious={added_previous} />
          </Grid>
          <Grid item sm={4}>
            <Typography variant="h4" className={clsx(classes.grid, classes.label)}>
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
      <Typography variant="h3" className={clsx(classes.grid, classes.value)}>
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

    value *= -1
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
      <Typography variant="h3" className={clsx(classes.grid, classes.value)}>
        {value}
      </Typography>
      {arrow}
      <Typography variant="h5" className={clsx(classes.grid, classes.diff)}>
        {diff}
      </Typography>
    </div>
  );
}
