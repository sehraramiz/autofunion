import React from 'react';
import Table from './Table.js';
import { findTeacher } from '../Utils.js';
import classData from '../static/data.json';


// Ostad Yab Page Main Component
// list of teachers in drop down list
const teachers = classData.teachers;

class OstadYab extends React.Component {
  constructor(props) {
      super(props);
      this.state = {selectedTeacher: '13935714'};

      this.handleChange = this.handleChange.bind(this);
      this.renderTeacherOptions = this.renderTeacherOptions.bind(this);
  }

  handleChange(event) {
    this.setState({selectedTeacher: event.target.value});
  }

  renderTeacherOptions(teacher) {
    console.log(teacher);
    return <option value={teacher.id}>{teacher.first_name + " " + teacher.last_name } </option>

  }

  render() {

    let info = teachers[this.state.selectedTeacher];
    let days = findTeacher(info);

    return (
        <div className="table-page-container" dir="rtl">
          <p>کی اذیتت کرده؟</p>
          <select value={this.state.value} onChange={this.handleChange}>
            { Object.keys(teachers).map( (id) => this.renderTeacherOptions(teachers[id]) ) }
          </select>
          <Table allClasses={days} squareContent="all"/>
        </div>
    );

  }
}

export default OstadYab;
