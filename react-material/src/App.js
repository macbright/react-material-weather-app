import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import {styled} from '@material-ui/styles';
import Forecast from './containers/Forecast/Forecast'
import Box from '@material-ui/core/Box'
import Chart from './components/chart'
import { Provider } from 'react-redux'
import store from './store/index'
import { connect } from 'react-redux'
import { fetchForecast } from './actions/forecastActions'
const Application = styled(Box)`
  text-align: center;
  height: 100vh;
  width: 1000px;
  margin: 0 auto;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Card = styled(Box)`
  position: relative;
  top: 50%;
  margin-top: -300px;
  height: 600px;
  background-color: white;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, .25);

  @media (max-width: 1000px) {
    top: 0;
    margin-top: 0;
    box-shadow: none;
  }
`;

//const apiKey = 'dbb624c32c7f0d652500552c5ebbde56';

class App extends Component {
  state = {
    error: {
      state: false,
      message: ''
    },
    updateTime:null,
    elapsed:0,
    lastUpdated:this.props.start,
    time: 0,
    start: 0,
    city : this.props.currentCity
  }

  componentWillMount(){
    this.props.fetchForecast('Belgrade');
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  componentDidMount(){
    this.setState({
      time: 0,
      start: Date.now() - 0,
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1000);
  }

  handleChangeTemperature = () => {
    this.handleChangeTime();
    this.props.fetchForecast('Belgrade');
  }

  handleChangeTime = () => {
    this.setState({time: 0});
    this.setState({
        time: 0,
        start: Date.now() - 0,
        isOn: true
      });
      clearInterval(this.timer);
      this.timer = setInterval(() => this.setState({
        time: Date.now() - this.state.start
      }), 1000);
  }

  render() {
     var elapsed = Math.round(this.state.time / 100);
     var mins = ((elapsed / 10)).toFixed(0); 
    return (
          <Application>
            <Card>
              <Forecast
                updatedTime={mins}
                handleUpdateTime = {this.handleChangeTime}
                handelUpdateTemperature = {this.handleChangeTemperature}
                >
              </Forecast>
            </Card>
          </Application>
    );
  }
}
const mapDispatchProps = dispatch => ({
  fetchForecast : city => {
    dispatch(fetchForecast(city));
  }
});
const mapStateToProps = state => ({
  currentCity : state.cities.currentCity,
});

export default connect(mapStateToProps, mapDispatchProps) (App);
