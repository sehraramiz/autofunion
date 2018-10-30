import React from 'react';
import Table from './Table.js';
import { findTeacher } from '../Utils.js';
import classData from '../static/data.json';
import Select from 'react-select';
import { compareStrings } from '../Utils';


// Ostad Yab Page Main Component
// list of teachers in drop down list
const teachers = classData.teachers;

// Options for react-select
const teachersOptions = [];
Object.keys(teachers).forEach((teacher) => {
  console.log(teacher);
  teachersOptions.push({
    value: teacher,
    label: teachers[teacher].last_name + " " + teachers[teacher].first_name,
    field: teachers[teacher].field,
  });
});

// sort teachers options array alphabetically base on teacher's last name
teachersOptions.sort((a, b) => {
  return compareStrings(a.label, b.label);
})

class OstadYab extends React.Component {
  constructor(props) {
      super(props);
      this.state = {selectedTeacher: '21549682'};

      this.handleChange = this.handleChange.bind(this);
      this.renderTeacherOptions = this.renderTeacherOptions.bind(this);
  }

  handleChange(event) {
    this.setState({selectedTeacher: event.value});
  }

  renderTeacherOptions(teacher) {
    return <option value={teacher.id}>{teacher.first_name + " " + teacher.last_name } </option>

  }

  render() {

    let info = teachers[this.state.selectedTeacher];
    let days = findTeacher(info);

    return (
        <div className="table-page-container" dir="rtl">
          <p>کی اذیتت کرده؟</p>
          <Select
            value={this.state.selectedTeacher}
            onChange={this.handleChange}
            options={teachersOptions}
            className="Select"
            />
          <Table allClasses={days} squareContent="all"/>
        </div>
    );

  }
}

export default OstadYab;
