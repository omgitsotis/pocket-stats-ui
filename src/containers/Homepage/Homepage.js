import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import Spinner from '../../components/UI/Spinner/Spinner';
import Header from '../../components/UI/Headers/Header';
import { updateStats, getStats } from '../../store/actions';

class Homepage extends Component {
    componentDidMount() {
        const endDate = moment.utc().startOf('day').unix();
        const startDate = moment.unix(endDate).utc().subtract(7, 'days').unix();
        this.props.getStats(startDate, endDate);
    }

    render() {
        const {isLoading, callFailed, callSuccess } = this.props;

        let component = <Spinner />;

        if(callFailed) {
            component = <div>Failed to update stats</div>;
        } else if (callSuccess) {
            component = this.renderTotalStats();
        }

        return (
            <Container>
                <Grid container spacing={3}>
                    <Grid item sm={10}>
                        <Header variant ="h2" title="Stats"></Header>
                    </Grid>
                    <Grid>
                        <Button onClick={() => this.props.updateStats()}>Update</Button>
                    </Grid>
                </Grid>
                {component}
            </Container>
        );
    }

    renderTotalStats() {
        const totalStats = this.props.totalStats
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item md={3} xs={6} >
                        <Paper>
                        <Typography variant="h5" component="h3">Articles Read</Typography>
                        <Typography variant="h2" component="body1">{totalStats.articles_read}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item md={3} xs={6}>
                        <Paper>
                        <Typography variant="h5" component="h3">Articles Added</Typography>
                        <Typography variant="h2" component="body1">{totalStats.articles_added}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item md={3} xs={6}>
                        <Paper>
                        <Typography variant="h5" component="h3">Words Read</Typography>
                        <Typography variant="h2" component="body1">{totalStats.words_read}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item md={3} xs={6}>
                        <Paper>
                        <Typography variant="h5" component="h3">Words Added</Typography>
                        <Typography variant="h2" component="body1">{totalStats.words_added}</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const stateJS = state.stats.toJS()
    return {
        isLoading:      stateJS.loading,
        callFailed:     stateJS.updateFailed,
        callSuccess:    stateJS.callSuccess,
        totalStats:     stateJS.totalStats,
        itemisedStats:  stateJS.itemisedStats
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateStats: () => dispatch(updateStats()),
        getStats: (startDate, endDate) => dispatch(getStats(startDate, endDate))
    };
}

export default connect( mapStateToProps, mapDispatchToProps )( Homepage );
