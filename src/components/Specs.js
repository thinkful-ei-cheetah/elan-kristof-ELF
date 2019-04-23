import React from 'react'

export default function Specs(props) {
  return (
    <li key={props.key} className="feature__item">
    <div className={props.featureClass}
      
      onClick={() => props.updateFeature(props.key2, props.item)}>
        { props.name }
        ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
          .format(props.cost) })
    </div>
  </li>
  )
}
