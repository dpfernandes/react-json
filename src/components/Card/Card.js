import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card({ image, disabled }) {
  const content = (
  <>
    <button
      className="card-component"
      type="submit"
      disabled={disabled}
    >
      <div className="container">
        <img src={image} 
             alt='alt'
             mode='fit'
            style={{width:'100px', height:'100px'}}
             />
      </div>
    </button>


    </>
  );
  return <div className="container">{content}</div>;
  
}
Card.propTypes = {
  disabled: PropTypes.bool,
};
Card.defaultProps = { disabled: false };
