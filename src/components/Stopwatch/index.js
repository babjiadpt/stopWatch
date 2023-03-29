// Write your code here
import './index.css'

import {Component} from 'react'

class Stopwatch extends Component {
  state = {timeInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  timeInMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    if (minutes <= 9) {
      return `0${minutes}`
    }
    return `${minutes}`
  }

  timeInSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)
    if (seconds <= 9) {
      return `0${seconds}`
    }
    return `${seconds}`
  }

  onClickStartTimer = () => {
    this.timerID = setInterval(this.startTimer, 1000)
  }

  startTimer = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  onClickStopTimer = () => {
    clearInterval(this.timerID)
  }

  onClickResetTimer = () => {
    clearInterval(this.timerID)
    this.setState({timeInSeconds: 0})
  }

  render() {
    const displayTimer = `${this.timeInMinutes()}:${this.timeInSeconds()}`

    return (
      <div className="app-container">
        <div className="stop-watch-container1">
          <h1 className="heading">Stopwatch</h1>
          <div className="card-container">
            <div className="stop-watch-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="stop-watch-image"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1 className="display-timer">{displayTimer}</h1>
            <div className="buttons-container">
              <button
                type="button"
                className="start button"
                onClick={this.onClickStartTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="stop button"
                onClick={this.onClickStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset button"
                onClick={this.onClickResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
