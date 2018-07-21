import React, { Component } from 'react';
import TagItem from './TagItem';

class TagList extends Component {
  constructor(props) {
      super(props);
      this.state = {
        selectedTag: -1,
      };

      this.onTagClick = this.onTagClick.bind(this);

  }
  renderTag(tag) {
    return <TagItem tagInfo={tag} onClick={this.onTagClick} selected={tag.id === this.state.selectedTag}/>
  }

  onTagClick(tagId) {
    this.setState({ selectedTag: tagId });
    this.props.onTagClick(tagId);
  }

  render() {
    return (
      <div>
        { this.props.tags === undefined ? 'no tags to show' :
          this.props.tags.map( (tag) => this.renderTag(tag) )
        }
      </div>
    );
  };
}

export default TagList;
