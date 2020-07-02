import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import css from './Advanced.css';
import Theme from '../../theme';

const useStyles = makeStyles(theme => ({
  dateLabel: {
    marginTop: theme.spacing(3),
    color: `#EFF8F3`,
    borderBottomWidth: 3,
    borderBottomColor: `#EFF8F3`,
    borderBottomStyle: 'solid'
  },
  loading: {
    margin: 100
  },
  label: {
    color: Theme.text,
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
  words: {
    color: `#D0EDF1`
  },
  diff: {
    textAlign: 'center',
    paddingLeft: 15,
    paddingTop: 17,
  }
}));

export const Tags = ({tags, previous_tags, stat_type, side}) => {
  const classes = useStyles();
  const ordered = sortTags(stat_type, tags, previous_tags);

  let container_css = css.halfGridLeft;
  if (side === "right") {
    container_css = css.halfGridRight;
  }

  return (
    <div className={container_css}>
      <Grid container>
        <Grid item sm={12}>
          <Typography variant="h4" className={classes.label}>
            Top Tags Read
          </Typography>
        </Grid>
        <Grid item sm={12}>
          {typeof(ordered[0]) !== 'undefined' &&
            <Typography variant="h4" className={classes.label}>
              {`${ordered[0].name} (${ordered[0].value})`}
            </Typography>
          }
        </Grid>
        <Grid item sm={12}>
          {typeof(ordered[1]) !== 'undefined' &&
            <Tag tag={ordered[1]}/>
          }
        </Grid>
        <Grid item sm={12}>
          {typeof(ordered[2]) !== 'undefined' &&
            <Typography variant="h4" className={classes.label}>
              {`${ordered[2].name} (${ordered[2].value})`}
            </Typography>
          }
        </Grid>
        <Grid item sm={12}>
          {typeof(ordered[3]) !== 'undefined' &&
            <Typography variant="h4" className={classes.label}>
              {`${ordered[3].name} (${ordered[3].value})`}
            </Typography>
          }
        </Grid>
        <Grid item sm={12}>
          {typeof(ordered[4]) !== 'undefined' &&
            <Typography variant="h4" className={classes.label}>
              {`${ordered[4].name} (${ordered[4].value})`}
            </Typography>
          }
        </Grid>
      </Grid>
    </div>
  )
}

const sortTags = (stat_type, tags, previousTags) => {
  if (typeof(tags) === "undefined") {
    return;
  }

  let ordered = [];
  for (const [name, stats] of Object.entries(tags)) {
    let previousValue = 0;
    const previousTag = previousTags[name];

    if (typeof(previousTag) !== "undefined") {
      previousValue = previousTag[stat_type];
    }

    ordered.push({
      name: name,
      value: stats[stat_type],
      previous: previousValue
    });
  }

  ordered.sort(function(a, b) {
    return b.value - a.value;
  });

  return ordered
}

const Tag = ({tag}) => {
  const classes = useStyles();
  const name = tag.name.charAt(0).toUpperCase() + tag.name.slice(1);
  const diff = tag.value - tag.previous;

  let arrow = (
    <span className={clsx(css.icon, css.iconUp)}>
      <ion-icon name="arrow-down"></ion-icon>
    </span>
  );

  if (diff > 0) {
    arrow = (
      <span className={clsx(css.icon, css.iconDown)}>
        <ion-icon name="arrow-up"></ion-icon>
      </span>
    );
  }

  return (
    <div className={css.valueBox}>
      <Typography variant="h4" className={classes.label}>
        {`${name} (${tag.value})`}
      </Typography>
      {arrow}
    </div>
  )
}
