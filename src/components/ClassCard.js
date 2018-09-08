import React from 'react';
import { Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap';

const ClassCard = (props) => {
    return (
        <div className="class-card" onClick={props.onClick}>
            {props.children}
            <Glyphicon glyph="remove" onClick={props.onRemoveClick}/>
        </div>
    );
};

export default ClassCard;
