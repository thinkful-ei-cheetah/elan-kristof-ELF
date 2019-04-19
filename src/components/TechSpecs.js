import React, { Component } from 'react'

export class TechSpecs extends Component {
  render() {
    return (
      <div>
        <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
              { this.props.features }
          </section>
      </div>
    )
  }
}

export default TechSpecs
