import React from 'react';

function TagItem(props) {
  return (
    <button className="tag-item" onClick={props.onClick}>
      {props.value === "" ? "" : props.value}
    </button>
  );
}

export default TagItem;
