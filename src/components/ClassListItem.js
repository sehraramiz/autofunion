import React from 'react';
import Card from './Card';


const ClassListItem = (props) => {
    return (
        <div className="class-list-item">
            <b>{ props.value.title }</b>
        </div>
    );
};

export default ClassListItem;
