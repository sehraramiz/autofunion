import React from 'react';

function TagItem(props) {
  const onTagClick = () => {
    props.onClick(props.tagInfo.id);
  }

  return (
    <button className="tag-item" onClick={onTagClick}>
      {props.tagInfo === undefined ? "" : props.tagInfo.word}
    </button>
  );
}

export default TagItem;
