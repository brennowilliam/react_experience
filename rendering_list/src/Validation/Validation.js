import React from 'react';

const Validation = (props) => {
  
  return (
    <div>
      <p> {props.inputLength <= 5 ? "Too short" : "Long enough"} </p>
    </div>
  );
}

export default Validation;