import React from 'react'
import Head from 'next/head'
import moment from 'moment'

import useRequest from '../libs/useRequest';
import axios from '../libs/axios'
import poll from '../libs/poll'

import Layout from '../components/Layout/Layout'
import Loader from '../components/UI/Loader/Loader'
import UpdateButton from '../components/UI/Button/UpdateButton'
import Statcards from '../components/UI/Homepage/Statcards'
import Graph from '../components/UI/Homepage/Graph';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url : "",
      authed: false,
      hasData: false,
      hasError: false,
      loading: false,
      error: "",
      data: {}
    }
  }

  componentDidMount() {
      this.getStats();
  }

  onError(error, message) {
    this.setState({
      hasError: true,
      error: message
    })
  }

  getStats() {
    const endDate = moment.utc().startOf('day').unix();
    const startDate = moment.unix(endDate).utc().subtract(7, 'days').unix();
    axios.get(`/stats?start=${startDate}&end=${endDate}`)
      .then(response => {
          this.setState({
            data: response.data,
            hasData: true,
            loading: false,
          })
      })
    .catch(error => this.onError(error, "couldn't get stats"))
  }

  updateDatabase() {
    // Mark the auth as done
    this.setState({authed: true});
    axios.get("/update")
      .then(response => {
        // Get the newly updated stats
        this.getStats();
      })
      .catch(error => this.onError(error, "couldn't update database"))
  }

  authenticate() {
    // Call the authenticate endpoint
    axios.get("/auth")
      .then(response => {
        // This part sucks. We have to open the pocket login page in a new tab.
        // Once I log in, pocket sends the server an Oauth token, and on receiving
        // that, the server serves a continue page.
        var win = window.open(response.data.url, '_blank');
        win.focus();
        // However I do not have a way of letting the client know that we have
        // been authenticated except with polling the "authed" endpoint until we
        // get back a 200.
        poll(function() { return axios.get('/auth/authed'); }, 10000, 1000)
          .then( response => {
            // only then can we update the database
            this.updateDatabase()
          })
          .catch(error => this.onError(error, "couldn't check if we have authentication"))
      })
      .catch(error => this.onError(error, "error authenticating user"))
    }

  onUpdatedClicked() {
    // Call the server to see if it has a valid Pocket token
    this.setState({loading: true})
    axios.get('/auth/authed')
      .then(response => {
        // If there is one, then we can call the Update endpoint to update the
        // server's database
        if(response.status === 200) {
          // Mark the auth as done
          this.setState({authed: true});
          axios.get("/update")
            .then(response => {
              // Get the newly updated stats
              this.getStats();
            })
            .catch(error => { this.onError() })
        } else {
          // Authenticate the user
          this.authenticate()
        }
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          this.authenticate()
        } else {
          this.onError(error, "couldn't check if we have authentication")
        }
      })
  }

  render() {
    let body = (
      <div className="row">
        <Loader />
      </div>
    )

    if (this.state.hasData) {
      body = (
        <div className= "row">
          <div className="col-12">
            <Statcards totals={this.state.data.totals} />
            <Graph itemised={this.state.data.itemised} />
          </div>
        </div>
      )

    }

    return (
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <div className="content text-center">
            <div style={{margin: 'auto'}}>
              <div className="frame">
                <div className="frame__body" style={{"overflow":"hidden"}}>
                  <div className="row p-0 level">
                    <div className="col-10">
                      <h2 className="headline-4">Home</h2>
                    </div>
                    <div className="col-2">
                      <UpdateButton onClick={() => this.onUpdatedClicked()} loading={this.state.loading}/>
                    </div>
                  </div>
                  <div className="divider" style={{"marginTop": "0px"}}/>
                  {body}
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}

export default Home;
