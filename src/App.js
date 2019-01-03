import React, { Component } from 'react';
import axios from 'axios';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Fab from '@material-ui/core/Fab';

import SearchIcon from '@material-ui/icons/Search';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import ImageCard from './components/imageCard';


const styles = theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    // width: 400,
  },
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
  },
  radiogroup: {
    display: 'flex',
    flexDirection: 'row',
  },
  iconButton: {
    padding: 10,
  }
});


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        query: '',
        results: [],
        searchOptions: '',
      }
    }

  componentDidMount() {
    axios.get(`https://images-api.nasa.gov/search?q=%`)
    .then((response) => {
      console.log(response)
      this.setState({
        results: response.data.collection.items,
      });
      console.log(this.state.results)
    })
    .catch(() => {
      alert('There was a problem. Please try again');
    });
    }

  handleChange = name => event => {
    this.setState({ 
      [name]: event.target.value,
    });
    console.log(this.state);
  }

  handleSubmit = () => {
    axios.get(`https://images-api.nasa.gov/search?q=${this.state.query}`)
      .then((response) => {
        console.log(response)
        this.setState({
          results: response.data.collection.items,
        });
        console.log(this.state.results)
      })
      .catch(() => {
        alert('There was a problem. Please try again');
      });
  }

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
              className={classes.textField}
              margin="normal"
              variant="outlined"
              onChange={this.handleChange('query')}
            />
            <RadioGroup
              name="searchOptions"
              onChange={this.handleChange('searchOptions')}
              className={classes.radiogroup}
            >
            <FormControlLabel 
              value="images"
              control={<Radio />}
              label="Images"
            />
            <FormControlLabel
              value="video"
              control={<Radio />}
              label="Video"
            />
            </RadioGroup>
              
            <Fab
              variant="extended"
              size="small"
              color="primary"
              aria-label="Search"
              className={classes.margin}
              onClick={this.handleSubmit}
            >
              <SearchIcon className={classes.rightIcon} />
            </Fab>

          </form>
        </Paper>

        {/* <ImageCard 
          results={this.state.results}
        /> */}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
