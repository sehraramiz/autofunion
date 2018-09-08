import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';

import ClassListItem from './ClassListItem';

class ClassList extends Component {
  constructor(props) {
      super(props);

  }

  renderClass = (value) => {
    return <ClassListItem value={value[0]} onRemoveClick={this.props.onRemoveClick} onClick={this.props.onClick}/>
  }

  render() {
    return(
      <div>
        {
          this.props.classes === undefined ? "" :
          Object.keys(this.props.classes).map( (id) => this.renderClass(this.props.classes[id]) )
        }
      </div>
    );
  };
}

export default ClassList;
