import React from 'react';
import MomentUtils from '@date-io/moment';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider, DatePicker} from '@material-ui/pickers';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { AdvancedSelect } from '../../components/UI/Select/AdvancedSelect';
import { Totals } from '../../components/UI/Advanced/Totals';
import { Tags } from '../../components/UI/Advanced/Tags';

import cssClasses from './Advanced.css';

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

const loadingPage = (classes) => (
  <Container>
    <Grid container spacing={3}>
      <Grid item sm={12}>
        <Typography variant ="h2">Advanced Stats</Typography>
      </Grid>
      <Grid container sm={12} justify="center" direction="row" alignItems="center">
        <CircularProgress size={300} className={classes.loading}/>
      </Grid>
    </Grid>
  </Container>
)

const Advanced = ({
  stats,
  callFailed,
  isLoading,
  startDate,
  endDate,
  onDateChanged,
  filterValue,
  onAdvanceFilterChanged
}) => {
  const classes = useStyles();

  if (typeof(stats.totals) === "undefined") {
    return loadingPage(classes)
  }

  return (
    <div className={cssClasses.parentColour}>
      <Container>
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <Typography variant ="h2" className={classes.title}>Advanced Stats</Typography>
          </Grid>
          <div className={cssClasses.advancedSelect}>
            <Grid item sm={12}>
              <AdvancedSelect
                value={filterValue}
                onFilterChange={onAdvanceFilterChanged}
                startDate={startDate}
                endDate={endDate}
                onDateChanged={onDateChanged}
              />
            </Grid>
          </div>
          <div className={cssClasses.dateLabelContainer}>
            <Grid item sm={12}>
              <Typography variant="h5" className={classes.dateLabel}>
                {`${startDate.format("dddd MMMM Do YYYY")} - ${endDate.format("dddd MMMM Do YYYY")}`}
              </Typography>
            </Grid>
          </div>
          <Totals
            read={stats.totals.articles_read}
            added={stats.totals.articles_added}
            read_previous={stats.previous.totals.articles_read}
            added_previous={stats.previous.totals.articles_added}
            label="Articles"
          />
          <Totals
            read={stats.totals.words_read}
            added={stats.totals.words_added}
            read_previous={stats.previous.totals.words_read}
            added_previous={stats.previous.totals.words_added}
            label="Words"
          />
          <Totals
            read={stats.totals.time_read}
            added={stats.totals.time_added}
            read_previous={stats.previous.totals.time_read}
            added_previous={stats.previous.totals.time_added}
            label="Time"
          />
          <Tags
            tags={stats.tags}
            previous_tags={stats.previous.tags}
            stat_type='words_read'
          />
          <Tags
            tags={stats.tags}
            previous_tags={stats.previous.tags}
            stat_type='articles_read'
            side="right"
          />
        </Grid>
      </Container>
    </div>
  );
}

export default Advanced;
