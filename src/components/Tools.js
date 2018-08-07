import React, { Component } from 'react';

import { Tab, Tabs } from 'react-bootstrap';

import OstadYab from './OstadYab';
import ClassYab from './ClassYab';
import EmptyClass from './EmptyClass';

class Tools extends Component {

  render() {
    return(
      <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="استاد یاب">
          <OstadYab />
        </Tab>
        <Tab eventKey={2} title="انتخاب واحد">
          <ClassYab />
        </Tab>
        <Tab eventKey={3} title="کلاس خالی">
          <EmptyClass />
        </Tab>
      </Tabs>
    );
  };
}


export default Tools;
