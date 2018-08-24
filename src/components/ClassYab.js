import React from 'react';
import Select from 'react-select';
import Table from './Table.js';
import { findClass, getAllClassesArray } from '../Utils.js';


const allClasses = getAllClassesArray();
const options = []
allClasses.forEach((item) => {
  options.push({
    value: item.id,
    label: item.title,
    group: item.group,
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
        pickedClasses: {},
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleAddClick = this.handleAddClick.bind(this);

  }

  handleChange(selectedClass) {
    this.setState({ selectedClass: {
      id: selectedClass.value,
      group: selectedClass.group,
    }});
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
    this.refs.fakhariFinger.addEventListener("transitionend", function(){
      if (document.getElementById("useless").checked == true) {
        document.getElementById("useless").checked = false;
    }
    });
  }

  render() {
    let classDays = findClass(this.state.selectedClass)
    return (
      <div className="table-page-container" dir="rtl">
        <div>
          <div>
            <Select
              value={this.state.value}
              onChange={this.handleChange}
              options={options}
              className="Select"
            />
          </div>
          <br/>
          <div class="wrapper">
              <input type="checkbox" id="useless" /><br/>
              <label for="useless">ساعت ۷ نباشه</label>
              <div class="fakhariFinger" id="fakhariFinger" ref="fakhariFinger" >👆🏽</div>
          </div>

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
