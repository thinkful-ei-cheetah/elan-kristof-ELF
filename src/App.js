import React, { Component } from 'react';
import './styles/App.css';
import NavBar from './components/NavBar';
import TechSpecs from './components/TechSpecs';
import Summary from './components/Summary';

class App extends Component {
  state = {
     selected: {},
     unseleceted: {}
  }

  componentDidMount() {
    console.log(this.props.features.selected)
    this.setState({
      selected: this.props.features.selected,
      unselected: this.props.features.unselected
    });
  }

  updateFeature(feature, newValue) {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {
    const summary = Object.keys(this.state.selected)
          .map(key => <div className="summary__option" key={key}>
            <div className="summary__option__label">{key}  </div>
            <div className="summary__option__value">{this.state.selected[key].name}</div>
            <div className="summary__option__cost">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(this.state.selected[key].cost) }
            </div>
        </div>)

    const total = Object.keys(this.state.selected)
          .reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);    

    console.log(this.state)
    const features = Object.keys(this.state.unselected)
          .map(key => {
            const options = this.state.unselected[key].map((item, index) => {
              const selectedClass = item.name === this.state.selected[key].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;
              return <li key={index} className="feature__item">
                <div className={featureClass}
                  
                  onClick={e => this.updateFeature(key, item)}>
                    { item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(item.cost) })
                </div>
              </li>
            });

            return <div className="feature" key={key}>
              <div className="feature__name">{key}</div>
              <ul className="feature__list">
                { options }
              </ul>
            </div>
          });      

    return (
      <div className="App">
      <NavBar />
        <main>
          <TechSpecs features={features} />
          <Summary total={total} summary={summary}/>
        </main>
      </div>
    );
  }
}

export default App;  
