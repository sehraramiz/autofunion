import React from 'react';
import Square from './Square.js';
import '../styles/table.css';
import { timeToIndex, dayToIndex } from '../Utils.js';
import {
  Modal,
  Button,
} from 'react-bootstrap';
import ClassText from './ClassText.js'


class Table extends React.Component {
  // renders what a square should show in the table
  renderSquare(squareNumber, tag, dayRowIndex) {
    let pickedClasses = this.props.pickedClasses;
    let allClasses = this.props.allClasses;
    let contentType = this.props.contentType;
    let classTextList = []
    if (pickedClasses) {
      // iterate through picked classes that passed with props
      // convert time and day to timeIndex and dayIndex to find the position
      // of the class section in table
      // if class info belongs to a square then we pass name of the class (or needed info)
      // down to square component
      for (let cls in pickedClasses) {
        for (let i = 0; i < pickedClasses[cls].length; i++) {
          let timeIndex = timeToIndex(pickedClasses[cls][i].class_time);
          let dayIndex = dayToIndex(pickedClasses[cls][i].day);
          if (timeIndex === (squareNumber % 10) && dayIndex === dayRowIndex) {
            tag = tag + pickedClasses[cls][i].title;
          }
          classTextList.push(<ClassText contentType={contentType}>{pickedClasses[cls][i]}</ClassText>)
        }
      }

    } else if (allClasses) {
      // show all classes on the table
      for (let i = 0; i < allClasses.length; i++) {
        let timeIndex = timeToIndex(allClasses[i].class_time);
        let dayIndex = dayToIndex(allClasses[i].day);
        if (timeIndex === (squareNumber % 10) && dayIndex === dayRowIndex) {
          if (contentType === "all") {
            tag = tag + "\n" + allClasses[i].title + " " + allClasses[i].class_loc;
          } else if (contentType === "location") {
            tag = tag + " " + allClasses[i].class_loc;
          }
          classTextList.push(<ClassText contentType={contentType}>{allClasses[i]}</ClassText>)
        }
      }
    }


    return (
      <Square
        onClick={() => this.props.onClick(classTextList, contentType)}
        value={tag}
      />
    );
  }


  render() {
    return (
      <table classNmae="week-table">
        <tbody>
          <tr>
          <th scope="row">:></th>
          <th>07:30</th>
          <th>09:00</th>
          <th>11:00</th>
          <th>14:00</th>
          <th>16:00</th>
          <th>17:00</th>
          </tr>
          <tr>
            <th>شنبه</th>
            <td>{this.renderSquare(10, "", 0)}</td>
            <td>{this.renderSquare(11, "", 0)}</td>
            <td>{this.renderSquare(12, "", 0)}</td>
            <td>{this.renderSquare(13, "", 0)}</td>
            <td>{this.renderSquare(14, "", 0)}</td>
            <td>{this.renderSquare(15, "", 0)}</td>
          </tr>
          <tr>
            <th>یکشنبه</th>
            <td>{this.renderSquare(20, "", 1)}</td>
            <td>{this.renderSquare(21, "", 1)}</td>
            <td>{this.renderSquare(22, "", 1)}</td>
            <td>{this.renderSquare(23, "", 1)}</td>
            <td>{this.renderSquare(24, "", 1)}</td>
            <td>{this.renderSquare(25, "", 1)}</td>
          </tr>
          <tr>
            <th>دوشنبه</th>
            <td>{this.renderSquare(30, "", 2)}</td>
            <td>{this.renderSquare(31, "", 2)}</td>
            <td>{this.renderSquare(32, "", 2)}</td>
            <td>{this.renderSquare(33, "", 2)}</td>
            <td>{this.renderSquare(34, "", 2)}</td>
            <td>{this.renderSquare(35, "", 2)}</td>
          </tr>
          <tr>
            <th>سه شنبه</th>
            <td>{this.renderSquare(40, "", 3)}</td>
            <td>{this.renderSquare(41, "", 3)}</td>
            <td>{this.renderSquare(42, "", 3)}</td>
            <td>{this.renderSquare(43, "", 3)}</td>
            <td>{this.renderSquare(44, "", 3)}</td>
            <td>{this.renderSquare(45, "", 3)}</td>
          </tr>
          <tr>
            <th>چهارشنبه</th>
            <td>{this.renderSquare(50, "", 4)}</td>
            <td>{this.renderSquare(51, "", 4)}</td>
            <td>{this.renderSquare(52, "", 4)}</td>
            <td>{this.renderSquare(53, "", 4)}</td>
            <td>{this.renderSquare(54, "", 4)}</td>
            <td>{this.renderSquare(55, "", 4)}</td>
          </tr>
        </tbody>

      </table>
    );
  }
}

class Container extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        squareContent: '',
        show: false,
      };

      this.handleClose = this.handleClose.bind(this);

  }

  handleClose() {
    this.setState({ show: false });
  }

  onSquareClick = (content) => {
    this.setState({squareContent: content});
    if (content.length > 0)
      this.setState({ show: true });
  }

  render() {
    return (
      <div className="table-container">
        <Table
          onClick={this.onSquareClick}
          classDays={this.props.classDays}
          pickedClasses={this.props.pickedClasses}
          allClasses={this.props.allClasses}
          contentType={this.props.contentType}
          />
        <Modal show={this.state.show} onHide={this.handleClose} dir='rtl'>
          <Modal.Header closeButton>
            <Modal.Title>کلاس ها</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.state.squareContent}</p>
          </Modal.Body>
        </Modal>

      </div>
    );
  }
}

export default Container;
