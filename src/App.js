import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';

// import './App.css';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    marginLeft: theme.spacing.unit * 5,
    marginRight: theme.spacing.unit *5,
  },
  textField: {
    alignItems: 'center',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        query: '',
        results: [],
      }
    }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
    if (this.state.query && this.state.query.length > 1) {
      if (this.state.query.length % 2 === 0) {
        // this.getInfo()
      }
    } else if (!this.state.query) {
    }
    })
    console.log(this.state.query)
  }

  render() {
    const { classes } = this.props;
    return (
     <React.Fragment>
       <CssBaseline />
       <AppBar position="static">
         <Typography variant="h6" color="inherit" noWrap>
           NASA Search
         </Typography>
       </AppBar>

      <Paper className={classes.paper}>
      <form>
      <TextField
          id="outlined-search"
          label="Search for..."
          type="search"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          onChange={this.handleInputChange}
          ref={input => this.search = input}
        />
        {/* <input
          placeholder="search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
          /> */}
          <input
            type="radio"
            name="mediaType"
            value="images"
          />Images
          <input
            type="radio"
            name="mediaType"
            value="video"
          />Video
      </form>
      </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
