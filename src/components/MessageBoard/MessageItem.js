import React from 'react';
import moment from 'moment-jalaali';
import Card from '../Card';
import TagList from '../Tags/TagList';


const Message = (props) => {
    return (
        <div className="message">
          <Card>
            <div dir="ltr">
              { props.value === undefined ? '' : props.value.owner }:
            </div>
            <div>
              { props.value === undefined ? '' : props.value.text }
            </div>
            <TagList tags={props.value.tags} onTagClick={props.onTagClick}/>
            <p dir="ltr">{moment(props.value.created, "JYYYYMMDD").fromNow()}</p>
          </Card>
        </div>
    );
};

export default Message;
