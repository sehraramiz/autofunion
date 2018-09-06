import React from 'react';
import { Grid, Row, Col, Label } from 'react-bootstrap';
import Select from 'react-select';
import Table from './Table.js';
import ClassInfo from './ClassInfo';
import ClassList from './ClassList';
import { getAllClassesArray, getAllDepartments, findClassDays } from '../Utils.js';


const allClasses = getAllClassesArray();
const allDepartments = getAllDepartments();
var classOptions = [];
const depOptions = [];
allClasses.forEach((item) => {
  classOptions.push({
    value: item.id,
    label: item.department.id === "1301" ? item.title + " گروه " + item.group : item.title,
    group: item.group,
    dep: item.department.id,
  });
});

depOptions.push({
  value: "0",
  label: "همه",
})
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
            id: '120630023',
            group: '1',
        },
        selectedDep: '0',
        pickedClasses: {},
        info: {},
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleDepChange = this.handleDepChange.bind(this);
      this.handleAddClick = this.handleAddClick.bind(this);
      this.onRemoveClick = this.onRemoveClick.bind(this);

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
      if (selectedDep.value === item.department.id || selectedDep.value === "0") {
        classOptions.push({
          value: item.id,
          label: item.title,
          group: item.group,
        });
      };
    });
  }

  handleAddClick() {
    let classDays = findClassDays(this.state.selectedClass);
    var pickedClasses = this.state.pickedClasses;
    pickedClasses[this.state.selectedClass.id] = classDays;
    this.setState({ pickedClasses });
  }

  onRemoveClick(id) {
    console.log("remove " + id);
    var pickedClasses = this.state.pickedClasses;
    delete pickedClasses[id];
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
    let classDays = findClassDays(this.state.selectedClass);
    return (
      <div className="table-page-container" dir="rtl">
        <Row className="show-grid">
          <Col xs={6} md={6}>
            <Label bsStyle="primary">کلاس</Label>
            <Select
              value={this.state.value}
              onChange={this.handleChange}
              options={classOptions}
              className="Select"
              />
          </Col>
          <Col xs={6} md={6}>
            <Label bsStyle="primary">گروه</Label>
            <Select
              value={this.state.value}
              onChange={this.handleDepChange}
              options={depOptions}
              className="DepSelect"
              />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} md={4}>
            <ClassList classes={this.state.pickedClasses} onRemoveClick={this.onRemoveClick}/>
          </Col>
          <Col xs={12} md={8}>
            <ClassInfo info={classDays} />
          </Col>
        </Row>
        <div>
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
