import React from 'react';
import Table from './Table.js';
import { findTeacher } from '../Utils.js';


// Ostad Yab Page Main Component
// list of teachers in drop down list
const teachers = {
  khadem: "خادم حسيني*امير*مهندسي كامپيوتر(100)*",
  ehsan: "حسيني*احسان*مهندسي كامپيوتر(100)*",
  fakhari: "فخاري*عباسعلي*مهندسي كامپيوتر(100)*",
  ghafari: "غفاري*آقاي*فناوري اطلاعات(100)*"
}
class OstadYab extends React.Component {
  constructor(props) {
      super(props);
      this.state = {selectedTeacher: 'ehsan'};

      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({selectedTeacher: event.target.value});
  }

  render() {

    let name = teachers[this.state.selectedTeacher];
    let days = findTeacher(name);

    return (
      <div class="ostad-yab" dir="rtl">
        <div>
          <h2>استاد یاب</h2>
          <h3>کی اذیتت کرده؟</h3>
          <select value={this.state.value} onChange={this.handleChange} dir="ltr">
            <option value="ehsan">احسان</option>
            <option value="ghafari">غفاری</option>
            <option value="khadem">خادم</option>
            <option value="fakhari">فخاری</option>
          </select>
          <Table allClasses={days} squareContent="all"/>
        </div>
      </div>
    );

  }
}

export default OstadYab;
