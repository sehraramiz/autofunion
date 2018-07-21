import React from 'react';

function TagItem(props) {
  const onTagClick = () => {
    props.onClick(props.tagInfo.id);
  }

  // FIXME when user clicks on tags in the messages those tags also change color
  const tagStyle = {
    background: props.selected ? "#7ccbd6" : "#fff",
    color: props.selected ? "#fff" : "#000",
  };

  return (
    <button className="tag-item" onClick={onTagClick} style={tagStyle}>
      {props.tagInfo === undefined ? "" : props.tagInfo.word}
    </button>
  );
}

export default TagItem;
