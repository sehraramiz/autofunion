import React from 'react';
import moment from 'moment-jalaali';
import Card from '../Card';
import TagList from '../Tags/TagList';


const Message = (props) => {
    return (
        <div className="message">
          <Card>
            <p dir="ltr" id="owner">
              { props.value === undefined ? '' : props.value.owner }:
            </p>
            <div id="text">
              { props.value === undefined ? '' : props.value.text }
            </div>
            <div id="footer">
              <TagList tags={props.value.tags} onTagClick={props.onTagClick}/>
              <p id="date" dir="ltr">{moment(props.value.created, "JYYYYMMDD").fromNow()}</p>
            </div>
          </Card>
        </div>
    );
};

export default Message;
