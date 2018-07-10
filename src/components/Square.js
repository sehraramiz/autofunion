import React from 'react';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value === "" ? "" : props.value.substring(0,10) + "..."}
    </button>
  );
}

export default Square;
