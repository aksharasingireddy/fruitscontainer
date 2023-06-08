// Write your code here
import './index.css'
import {Component} from 'react'

class FruitsContainer extends Component {
  state = {countMango: 0}
  state = {countBanana: 0}

  onIncrementMango = () => {
    this.setState(prevState => ({countMango: prevState.countMango + 10}))
  }

  onIncrementBanana = () => {
    this.setState(prevState => ({
      countBanana: prevState.countBanana + 10,
    }))
  }

  render() {
    const {countMango} = this.state

    const {countBanana} = this.state

    return (
      <div className="bg-container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate <span className="span">{countMango} </span> mangoes
            <span className="span">{countBanana}</span> bananas
          </h1>
          <div className="mini-container">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
              />
              <button onClick={this.countMango} className="button">
                Eat Mango
              </button>
            </div>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                className="image"
              />
              <button onClick={this.countBanana} className="button">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsContainer
