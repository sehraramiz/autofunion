import React from 'react';
import Card from '../Card'

const Message = (props) => {
    return (
        <div class="message">
          <Card>
            <div dir="ltr">
              { props.value === undefined ? '' : props.value.owner }:
            </div>
            <div>
              { props.value === undefined ? '' : props.value.text }
            </div>
          </Card>
        </div>
    );
};

export default Message;
