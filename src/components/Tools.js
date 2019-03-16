import React, { Component } from 'react';

import { Tab, Tabs, Panel } from 'react-bootstrap';

import OstadYab from './OstadYab';
import ClassYab from './ClassYab';
import EmptyClass from './EmptyClass';

class Tools extends Component {

  render() {
    return(
      <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="استاد یاب">
          <Panel>
            <Panel.Body>
              <p>استاد یاب که خب طبیعتا استاد را می یابد.</p>
              <p>کلاس های استاد انتخابی رو در طول هفته نمایش می ده.</p>
            </Panel.Body>
          </Panel>
          <OstadYab />
        </Tab>
        <Tab eventKey={2} title="کلاس خالی">
          <Panel>
            <Panel.Body>
              <p>در اصل لیست کلاس های پر هر روز هفته رو نشون میده و بنا بر اصل عدم شمول</p>
              <p> لیست کلاس های خالی نیز قابل استخراج می باشد.</p>
              <p>دیده شده که اگه لیست کلاس ها رو از نگهبان دانشکده بپرسید</p>
              <p>باید نامه ی امضا شده از امور فرهنگی تحویل بدید :| .</p>
              <p>امیدوارم قانونش تغییر کرده باشه</p>
              <p><b>باشد که کلاس های فوق برنامه بیشتری در کلاس های خالی برگزار کنیم.</b></p>
            </Panel.Body>
          </Panel>
          <EmptyClass />
        </Tab>
        {/*<Tab eventKey={3} title="انتخاب واحد">
          <Panel>
            <Panel.Body>
              <p>لیست کلاس ها و درس های ارائه شده در این نیم سال رو میتونید ببینید </p>
              <p>و انتخاب کنید و برنامه کلاسی این ترم رو بچینید.</p>
              <p>این ابزار تداخلات امتحانات و ساعات رو هم چک میکنه.</p>
              <p>باشد که آن دسته از دانشجویان سردرگم و عقب افتاده از درس اندکی تسکین یابند.</p>
            </Panel.Body>
          </Panel>
          <ClassYab />
        </Tab>*/}
      </Tabs>
    );
  };
}


export default Tools;
