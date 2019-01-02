import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import FormControlLabel from '@material-ui/core/FormControlLabel';


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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
});


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        query: '',
        results: [],
        images: false,
        video: false,
      }
    }

  handleChange = event => {
    this.setState({ value: event.target.value });
    console.log(this.state.query)
  };

  render() {
    const { classes } = this.props;
    return (
     <React.Fragment>
       <CssBaseline />
       <AppBar position="static">
       <Toolbar>
         <Typography variant="h6" color="inherit" noWrap>
           NASA Search
         </Typography>
         </Toolbar>
       </AppBar>

      <Paper className={classes.paper}>
      <form className={classes.form}> 
      <TextField
          id="outlined-search"
          label="Search for..."
          type="search"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          onChange={this.handleChange}
        />
          <RadioGroup
            name="searchOptions"
            value={this.state.value}
            onChange={this.handleChange}
          >
          <FormControlLabel value="images" control={<Radio />} label="Images" />
          <FormControlLabel value="video" control={<Radio />} label="Video" />
          </RadioGroup>
      </form>
      </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
