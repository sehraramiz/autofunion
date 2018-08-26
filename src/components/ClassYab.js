import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import Table from './Table.js';
import { findClass, getAllClassesArray, getAllDepartments } from '../Utils.js';


const allClasses = getAllClassesArray();
const allDepartments = getAllDepartments();
var classOptions = [];
const depOptions = [];
allClasses.forEach((item) => {
  classOptions.push({
    value: item.id,
    label: item.title,
    group: item.group,
  });
});

Object.keys(allDepartments).forEach((item) => {
  depOptions.push({
    value: item,
    label: allDepartments[item],
  });
});

// Class Yab Page Main Component
class ClassYab extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        selectedClass: {
            id: '120331073',
            group: '1',
        },
        selectedDep: '1203',
        pickedClasses: {},
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleDepChange = this.handleDepChange.bind(this);
      this.handleAddClick = this.handleAddClick.bind(this);

  }

  handleChange(selectedClass) {
    this.setState({ selectedClass: {
      id: selectedClass.value,
      group: selectedClass.group,
    }});
  }

  handleDepChange(selectedDep) {
    this.setState({ selectedDep: selectedDep.value });
    classOptions = [];
    allClasses.forEach((item) => {
      if (selectedDep.value === item.department.id) {
        classOptions.push({
          value: item.id,
          label: item.title,
          group: item.group,
        });
      };
    });
    console.log(classOptions);
  }

  handleAddClick() {
    let classDays = findClass(this.state.selectedClass);
    var pickedClasses = this.state.pickedClasses;
    pickedClasses[this.state.selectedClass.id] = classDays;
    this.setState({ pickedClasses });
  }

  componentDidMount() {
    /* when fakhari's finger touched the checkbox
      this event listener will uncheck the box */
    // this.refs.fakhariFinger.addEventListener("transitionend", function(){
    //   if (document.getElementById("useless").checked == true) {
    //     document.getElementById("useless").checked = false;
    // }
    // });
  }

  render() {
    let classDays = findClass(this.state.selectedClass);
    return (
      <div className="table-page-container" dir="rtl">
        <div>
          <Row className="show-grid">
            <Col xs={6} md={6}>
              <Select
                value={this.state.value}
                onChange={this.handleChange}
                options={classOptions}
                className="Select"
              />
            </Col>
            <Col xs={6} md={6}>
              <Select
                value={this.state.value}
                onChange={this.handleDepChange}
                options={depOptions}
                className="DepSelect"
              />
            </Col>
          </Row>
          <br/>
          {/*<div class="wrapper">
              <input type="checkbox" id="useless" /><br/>
              <label for="useless">ساعت ۷ نباشه</label>
              <div class="fakhariFinger" id="fakhariFinger" ref="fakhariFinger" >👆🏽</div>
          </div>*/}
          <button onClick={this.handleAddClick}>
            اضافه کن
          </button>
        </div>
        <Table classDays={classDays} pickedClasses={this.state.pickedClasses}/>
      </div>
    );
  }
}

export default ClassYab;
