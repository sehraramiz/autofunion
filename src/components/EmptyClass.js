import React from 'react';
import Table from './Table.js';
import { getAllClassesArray } from '../Utils.js';


// Empty classes main components
class EmptyClass extends React.Component {

  render() {
    return (
      <div className="table-page-container" dir="rtl">
        <Table allClasses={getAllClassesArray()} squareContent="location"/>
      </div>
    );
  }

}

export default EmptyClass;
