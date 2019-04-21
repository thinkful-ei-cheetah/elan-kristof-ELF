import React, { Component } from 'react'
import Feature from './Features'

export class TechSpecs extends Component {
  render() {
    
    const features = Object.keys(this.props.unselected)
          .map(key => {
            const options = this.props.unselected[key].map((item, index) => {
              const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;
              return <li key={index} className="feature__item">
                <div className={featureClass}
                  
                  onClick={() => this.props.updateFeature(key, item)}>
                    { item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(item.cost) })
                </div>
              </li>
            });

            return <Feature key={key} product ={key} options = {options} />          });      

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
