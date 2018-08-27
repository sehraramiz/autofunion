import React from 'react';

import { Panel, Row, Col, Grid } from 'react-bootstrap';

function ClassInfo(props) {
  return (
      <Panel className="class-info">
        <Panel.Body>
          <Row>
            <Col xs={12} md={6}>
              <p>{ props.info[0].teacher.first_name + " " + props.info[0].teacher.last_name }</p>
            </Col>
            <Col xs={12} md={6}>
              <p>{ props.info[0].title }</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <p>{ "گروه: " +
                props.info[0].group +
                " واحد: " +
                props.info[0].units +
                " ظرفیت: " +
                props.info[0].capacity
              }</p>
            </Col>
            <Col xs={12} md={6}>
              <p>{ props.info[0].id }</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <p>{ "تاریخ امتحان: " + props.info[0].exam_date + " " + props.info[0].exam_time }</p>
            </Col>
            <Col xs={12} md={6}>
                <ul>{
                    props.info.map((item, i) => {
                      return <li>{item.day + " " + item.class_time}</li>
                    })}
                </ul>
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
  );
}

export default ClassInfo;
