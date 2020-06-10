import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import css from './Advanced.css';

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
  articleGrid: {
    color: `#F3BAC3`
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
  const ordered = sortTags(stat_type, tags);

  let container_css = css.halfGridLeft;
  if (side === "right") {
    container_css = css.halfGridRight;
  }

  return (
    <div className={container_css}>
      <Grid container>
        <Grid item sm={12}>
          <Typography variant="h4" className={clsx(classes.articleGrid, classes.label)}>
            Top Tags Read
          </Typography>
          {typeof(ordered[0]) !== 'undefined' &&
            <Typography variant="h4" className={clsx(classes.articleGrid, classes.label)}>
              {`${ordered[0].name} (${ordered[0].value})`}
            </Typography>
          }
          {typeof(ordered[1]) !== 'undefined' &&
            <Typography variant="h4" className={clsx(classes.articleGrid, classes.label)}>
              {`${ordered[1].name} (${ordered[1].value})`}
            </Typography>
          }
          {typeof(ordered[2]) !== 'undefined' &&
            <Typography variant="h4" className={clsx(classes.articleGrid, classes.label)}>
              {`${ordered[2].name} (${ordered[2].value})`}
            </Typography>
          }
          {typeof(ordered[3]) !== 'undefined' &&
            <Typography variant="h4" className={clsx(classes.articleGrid, classes.label)}>
              {`${ordered[3].name} (${ordered[3].value})`}
            </Typography>
          }
          {typeof(ordered[4]) !== 'undefined' &&
            <Typography variant="h4" className={clsx(classes.articleGrid, classes.label)}>
              {`${ordered[4].name} (${ordered[4].value})`}
            </Typography>
          }
        </Grid>
      </Grid>
    </div>
  )
}

const sortTags = (stat_type, tags) => {
  if (typeof(tags) === "undefined") {
    return;
  }

  let ordered = [];
  for (const [name, stats] of Object.entries(tags)) {
    ordered.push({name: name, value: stats[stat_type]});
  }

  ordered.sort(function(a, b) {
    return b.value - a.value;
  })

  console.log(ordered);
  return ordered
}
