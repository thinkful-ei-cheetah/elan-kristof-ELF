import React, { Component } from 'react'
import Feature from './Features'
import Specs from './Specs'

export class TechSpecs extends Component {
  render() {
    
    const features = Object.keys(this.props.unselected)
          .map(key => {
            const options = this.props.unselected[key].map((item, index) => {
              const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;
              return <Specs 
                        key={index} 
                        updateFeature={this.props.updateFeature} 
                        name={item.name} 
                        cost={item.cost} 
                        featureClass={featureClass} 
                        key2={key}
                        item={item}
              />});

            return <Feature 
                      key={key} 
                      product ={key} 
                      options = {options} />});      

    return (
      <div>
        <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
              { features }
              
          </section>
      </div>
    )
  }
}

export default TechSpecs
