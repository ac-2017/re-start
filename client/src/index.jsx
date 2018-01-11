import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Time from './components/Time.jsx'
import Weather from './components/Weather.jsx'
import Calendar from './components/Calendar.jsx'
import Mail from './components/Mail.jsx'
import News from './components/News.jsx'
// import AnyComponent from './components/filename.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      greeting: '',
      weather: {}
    }
    this.getWeather = this.getWeather.bind(this)
  }

  componentWillMount() {
    var today = new Date().getHours()
    if (today > 18) {
      this.setState({
        greeting: 'Good Evening'
      })
    } else if (today > 12) {
      this.setState({
        greeting: 'Good Afternoon'
      })
    } else {
      this.setState({
        greeting: 'Good Morning'
      })
    }
  }

  getWeather() {
    axios.get('/weather').then(() => {
      
    })
  }


  render () {
    return (
      <div className="app">
        <div className="title"><span>{this.state.greeting}</span></div>
        <div className="dashboard">
        <div className="lt-container lt-xs-h-6 lt-sm-h-5 lt-md-h-3 lt-lg-h-3">
          <Time/>
          <Weather/>
          <Calendar/>
          <Mail/>
          <News/>
        </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));