import React from 'react';
import ClassCard from './ClassCard';


const ClassListItem = (props) => {
    const onClassItemRemoveClick = () => {
      props.onRemoveClick(props.value.id);
    }
    const onClassItemClick = () => {
      props.onClick(props.value.id);
    }
    return (
        <div className="class-list-item">
            <ClassCard onRemoveClick={onClassItemRemoveClick} onClick={onClassItemClick}>{ props.value.title }</ClassCard>
        </div>
    );
};

export default ClassListItem;
