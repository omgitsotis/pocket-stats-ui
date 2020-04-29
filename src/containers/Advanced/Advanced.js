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
          <div className={cssClasses.grid}>
            <Grid container>
              <Grid item sm={4}>
                <Typography variant="h4" className={clsx(classes.articleGrid, classes.label)}>
                  Articles Read
                </Typography>
                <Typography variant="h3" className={clsx(classes.articleGrid, classes.value)}>
                  {stats.totals.articles_read}
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography variant="h4" className={clsx(classes.articleGrid, classes.label)}>
                  Articles Added
                </Typography>
                <Typography variant="h3" className={clsx(classes.articleGrid, classes.value)}>
                  {stats.totals.articles_added}
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography variant="h4" className={clsx(classes.articleGrid, classes.label)}>
                  Difference
                </Typography>
                <Typography variant="h3" className={clsx(classes.articleGrid, classes.value)}>
                  {stats.totals.articles_added - stats.totals.articles_read}
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div className={cssClasses.grid}>
            <Grid container>
              <Grid item sm={4}>
                <Typography variant="h4" className={clsx(classes.words, classes.label)}>
                  Words Read
                </Typography>
                <Typography variant="h3" className={clsx(classes.words, classes.value)}>
                  {stats.totals.words_read}
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography variant="h4" className={clsx(classes.words, classes.label)}>
                  Words Added
                </Typography>
                <Typography variant="h3" className={clsx(classes.words, classes.value)}>
                  {stats.totals.words_added}
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography variant="h4" className={clsx(classes.words, classes.label)}>
                  Difference
                </Typography>
                <Typography variant="h3" className={clsx(classes.words, classes.value)}>
                  {stats.totals.words_added - stats.totals.words_read}
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div className={cssClasses.grid}>
            <Grid container>
              <Grid item sm={4}>
                <Typography variant="h4" className={clsx(classes.articleGrid, classes.label)}>
                  Time Spent Read
                </Typography>
                <Typography variant="h3" className={clsx(classes.articleGrid, classes.value)}>
                  {`${stats.totals.time_read} mins`}
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography variant="h4" className={clsx(classes.articleGrid, classes.label)}>
                  Time Spent Added
                </Typography>
                <Typography variant="h3" className={clsx(classes.articleGrid, classes.value)}>
                  {`${stats.totals.time_added} mins`}
                </Typography>
              </Grid>
              <Grid item sm={4}>
                <Typography variant="h4" className={clsx(classes.articleGrid, classes.label)}>
                  Difference
                </Typography>
                <Typography variant="h3" className={clsx(classes.articleGrid, classes.value)}>
                  {`${stats.totals.time_added - stats.totals.time_read} mins`}
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div className={cssClasses.halfGridLeft}>
            <Grid container>
              <Grid item sm={12}>
                <Typography variant="h4" className={clsx(classes.articleGrid, classes.label)}>
                  Top Tags
                </Typography>
                <Typography variant="h4" className={clsx(classes.articleGrid, classes.label)}>
                  {` Basketball: (${stats.tags.basketball.articles_read})`}
                </Typography>
                <Typography variant="h4" className={clsx(classes.articleGrid, classes.label)}>
                  {` Coronavirus: (${stats.tags.corona.articles_read})`}
                </Typography>
                <Typography variant="h4" className={clsx(classes.articleGrid, classes.label)}>
                  {` Movies: (${stats.tags.movie.articles_read})`}
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div className={cssClasses.halfGridRight}>
            <Grid container>
              <Grid item sm={12}>
                <Typography variant="h4" className={clsx(classes.articleGrid, classes.label)}>
                  Top Tags
                </Typography>
                <Typography variant="h4" className={clsx(classes.articleGrid, classes.label)}>
                  {` Basketball: (${stats.tags.basketball.articles_read})`}
                </Typography>
                <Typography variant="h4" className={clsx(classes.articleGrid, classes.label)}>
                  {` Coronavirus: (${stats.tags.corona.articles_read})`}
                </Typography>
                <Typography variant="h4" className={clsx(classes.articleGrid, classes.label)}>
                  {` Movies: (${stats.tags.movie.articles_read})`}
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Container>
    </div>
  );
}

export default Advanced;
