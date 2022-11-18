import React, { Component } from 'react'
import path from 'path'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      units: 'standard',
      height: '',
      weight: '',
      age: '',
      type: '1',
      bsl: '',
      din: '',
    }
  }

  handleUnitsChange = (event) => {
    this.setState({
      units: event.target.value,
    })
  }

  handleTypeChange = (event) => {
    this.setState({
      type: event.target.value,
    })
  }

  handleHeightChange = (event) => {
    this.setState({
      height: event.target.value,
    })
  }

  handleWeightChange = (event) => {
    this.setState({
      weight: event.target.value,
    })
  }

  handleAgeChange = (event) => {
    this.setState({
      age: event.target.value,
    })
  }

  handleBslChange = (event) => {
    this.setState({
      bsl: event.target.value,
    })
  }

  handleSubmit = async (event) => {
    const apiRoot = path.join(process.cwd(), 'api/DIN/calculate')
    let url = `${apiRoot}?units=${this.state.units}&type=${this.state.type}&height=${this.state.height}&weight=${this.state.weight}&age=${this.state.age}&bsl=${this.state.bsl}`
    console.log('Getting data from: ' + url)
    event.preventDefault()
    const response = await fetch(url)
    const data = await response.json()
    console.log('response:')
    console.log(data)
    if (data.status === 200) {
      this.setState({
        din: 'Din: ' + data.din,
      })
    } else {
      this.setState({
        din: data.message,
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="Form">
        <div className="Form-element">
          <label className="Form-label">Units:</label>
          <select title="units" value={this.state.units} onChange={this.handleUnitsChange}>
            <option value="standard">Standard</option>
            <option value="metric">Metric</option>
          </select>
        </div>
        <div className="Form-element">
          <label className="Form-label">Skier Type:</label>
          <input
            id="type0"
            type="radio"
            value="0"
            checked={this.state.type === '0'}
            onChange={this.handleTypeChange}
            className="Form-radio"
          />
          <label htmlFor="type0" className="Form-radioLabel">
            1-{' '}
          </label>
          <input
            id="type1"
            type="radio"
            value="1"
            checked={this.state.type === '1'}
            onChange={this.handleTypeChange}
            className="Form-radio"
          />
          <label htmlFor="type1" className="Form-radioLabel">
            1
          </label>
          <input
            id="type2"
            type="radio"
            value="2"
            checked={this.state.type === '2'}
            onChange={this.handleTypeChange}
            className="Form-radio"
          />
          <label htmlFor="type2" className="Form-radioLabel">
            2
          </label>
          <input
            id="type3"
            type="radio"
            value="3"
            checked={this.state.type === '3'}
            onChange={this.handleTypeChange}
            className="Form-radio"
          />
          <label htmlFor="type3" className="Form-radioLabel">
            3{' '}
          </label>
          <input
            id="type4"
            type="radio"
            value="4"
            checked={this.state.type === '4'}
            onChange={this.handleTypeChange}
            className="Form-radio"
          />
          <label htmlFor="type4" className="Form-radioLabel">
            3+
          </label>
        </div>
        <div className="Form-element">
          <label className="Form-label">Height: </label>
          <input
            type="text"
            value={this.state.height}
            placeholder="Height"
            onChange={this.handleHeightChange}
            className="Form-textbox"
          />
        </div>
        <div className="Form-element">
          <label className="Form-label">Weight: </label>
          <input
            type="text"
            value={this.state.weight}
            placeholder="Weight"
            onChange={this.handleWeightChange}
            className="Form-textbox"
          />
        </div>
        <div className="Form-element">
          <label className="Form-label">Age: </label>
          <input
            type="text"
            value={this.state.age}
            placeholder="Age"
            onChange={this.handleAgeChange}
            className="Form-textbox"
          />
        </div>
        <div className="Form-element">
          <label className="Form-label">Boot Sole Length: </label>
          <input
            type="text"
            value={this.state.bsl}
            placeholder="Boot Sole Length (mm)"
            onChange={this.handleBslChange}
            className="Form-textbox"
          />
        </div>
        <div className="Form-submit">
          <button type="submit">Calculate Din</button>
        </div>
        <div className="Form-din">
          <text>{this.state.din}</text>
        </div>
      </form>
    )
  }
}

export default Form
