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
    /*
      if user clicks on a tag it will call onTagClick method in MessageList
      component and call fetchBoardWithTag method to show messages related to
      tag ,if user clicks on selected tag we deselect the tag and fetch board
      with no tag
    */
    if (this.state.selectedTag === tagId) {
      this.setState({ selectedTag: -1 });
      this.props.onTagClick(-1);
    }
    else {
      this.setState({ selectedTag: tagId });
      this.props.onTagClick(tagId);
    }
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
