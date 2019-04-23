import React from 'react';

const Feature = ({options, product}) => (
  <div className="feature" >
    <div className="feature__name">{product}</div>
      <ul className="feature__list">
          { options }
      </ul>
</div>
)

export default Feature;