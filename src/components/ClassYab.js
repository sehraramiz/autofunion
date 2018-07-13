import React from 'react';
import Table from './Table.js';
import { findClass } from '../Utils.js';


// list of classes in drop down list
const classes = {
  signal: "سيگنال و سيستم(اي تي ج)",
  paygah: "پايگاه داده ها(علوم كامپيوتر)",
  fizik: "فيزيک2(کامپيوتر)",
  os: "سيستم عامل",
}

// Class Yab Page Main Component
class ClassYab extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        selectedClass: 'signal',
        pickedClasses: {},
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleChange(event) {
    this.setState({selectedClass: event.target.value});
  }

  handleAddClick() {
    let classDays = findClass(classes[this.state.selectedClass]);
    var pickedClasses = this.state.pickedClasses;
    pickedClasses[classDays[0].id] = classDays;
    this.setState({ pickedClasses });
  }

  render() {
    let classDays = findClass(classes[this.state.selectedClass])

    return (
      <div class="ostad-yab" dir="rtl">
        <div>
          <h2>انتخاب واحد برای بدبخت ها</h2>
          <h3>چی ورداریم مشروط نشیم؟</h3>
          <select value={this.state.value} onChange={this.handleChange} dir="ltr">
            <option value="signal">سیگنال</option>
            <option value="fizik">فیزیک</option>
            <option value="paygah">پایگاه</option>
            <option value="os">سیستم عامل</option>
          </select>
          <br></br>
          <button onClick={this.handleAddClick}>
            اضافه کن
          </button>
        </div>
        <div>
          <Table classDays={classDays} pickedClasses={this.state.pickedClasses}/>
        </div>
      </div>
    );

  }
}

export default ClassYab;
