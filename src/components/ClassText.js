import React from 'react';

  class ClassText extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showText : false,
        };

      this.onClassTextClick = this.onClassTextClick.bind(this);

    }

    onClassTextClick() {
        this.setState({ showText : !this.state.showText });
    };

    renderMainText() {
        let classInfo = this.props.children
        let mainText = this.props.contentType === "location" ? classInfo.class_loc : classInfo.title;

        return mainText
    };
    
    render() {
        let classInfo = this.props.children
        let text = classInfo.title + " " + classInfo.class_loc + " " + classInfo.teacher.first_name + " " + classInfo.teacher.last_name
        return (
            <div className="class-text" onClick={this.onClassTextClick} style={this.state.showText ? styles.fullText : {}}>
                { this.state.showText ? text : this.renderMainText() }
            </div>
        )
      }
  }

  var styles = {
    fullText: {
      color: "#ff1a1a",
    }
  };

export default ClassText;