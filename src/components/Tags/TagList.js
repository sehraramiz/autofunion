import React, { Component } from 'react';
import TagItem from './TagItem';

class TagList extends Component {
  renderTag(tag) {
    return <TagItem tagInfo={tag} onClick={this.props.onTagClick}/>
  }

  render() {
    return (
      <div>
        {this.props.tags.map( (tag) => this.renderTag(tag) )}
      </div>
    );
  };
}

export default TagList;
