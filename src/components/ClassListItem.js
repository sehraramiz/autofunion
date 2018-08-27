import React from 'react';
import ClassCard from './ClassCard';


const ClassListItem = (props) => {
    const onClassItemClick = () => {
      props.onRemoveClick(props.value.id);
    }
    return (
        <div className="class-list-item">
            <ClassCard onRemoveClick={onClassItemClick}>{ props.value.title }</ClassCard>
        </div>
    );
};

export default ClassListItem;
