import React, { Component } from 'react';

import { Panel } from 'react-bootstrap';


class Home extends Component {

  render() {
    return(
      <div >
        <Panel>
          <Panel.Body>
            <p>
              <b>تابلو اعلانات</b> رو میبینید.
            </p>
            <p>
              میتونید پیامی رو با تگ های پیش فرض روی تابلو بذارید.
            </p>
            <p>
              پیام هایی که اینجا گذاشته میشه رو میتونید توی
              <a href="http://telegram.me/blah"> این کانال تلگرام </a>
              ببینید.
            </p>
          </Panel.Body>
        </Panel>
      </div>
    );
  };
}

export default Home;
