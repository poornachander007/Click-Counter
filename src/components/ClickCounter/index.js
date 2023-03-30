// Write your code here
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(preState => ({count: preState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>The Button has been clicked {count} times</h1>
        <p>click the button to increase the count!</p>
        <button type="button" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
