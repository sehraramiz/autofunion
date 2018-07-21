import React, { Component } from 'react';
import TagItem from './TagItem';

class TagList extends Component {
  render() {
    return (
      <div>
        <TagItem value="exam" />
        <TagItem value="help" />
        <TagItem value="blah" />
        <TagItem value="suggestion" />
      </div>
    );
  };
}

export default TagList;
