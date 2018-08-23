import React from 'react';

import { Panel } from 'react-bootstrap';

const About = () => (
  <div >
    <Panel>
      <Panel.Body>
        <p>
          در <b>اتوفانیون</b> هستید (اسم دیگه ای به ذهنم نرسید)
        </p>
        <p>
          چنتا از چیزایی که اتوماسیون آموزشی کم داره رو میتونید اینجا ببینید.
        </p>
      </Panel.Body>
    </Panel>
    <Panel>
      <Panel.Heading>
        بخش ابزار
      </Panel.Heading>
      <Panel.Body>
        <p>
          بخش ابزار به اطلاعاتی که از اتوماسیون استخراج شده یه خورده سر و سامون داده.
        </p>
        <p>
          هر ترم لیست کلاس ها به روز میشه و میتونید اطلاعات کلاس ها رو در روز های هفته ببینید.
        </p>
      </Panel.Body>
    </Panel>
  </div>
)

export default About;
