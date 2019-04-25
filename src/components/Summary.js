import React, { Component } from 'react'
import PriceDisplay from './PriceDisplay'
import SummaryOptions from './SummaryOptions'

export class Summary extends Component {
  render() {

    const summary = Object.keys(this.props.selected)
    .map(val => <SummaryOptions key={val} id={val} selected={this.props.selected}/>)
    
    const total = Object.keys(this.props.selected)
    .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);  

    return (
        <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            {summary}
            <PriceDisplay total ={total}/>
      </section>
    )
  }
}

export default Summary
