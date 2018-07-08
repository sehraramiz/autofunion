import React from 'react';
import Square from './Square.js';
import '../styles/table.css';
import { timeToIndex, dayToIndex } from '../Utils.js';


class Table extends React.Component {
  // renders what a square should show in the table
  renderSquare(squareNumber, tag, dayRowIndex) {
    let classDays = this.props.classDays;
    // iterate through class info that passed with props
    // convert time, day to timeIndex, dayIndex to find the location
    // of the class section in table
    // if class info belongs to a square then we pass name of the class (or needed info)
    // down to square component
    for (var i = 0; i < classDays.length; i++) {
      let timeIndex = timeToIndex(classDays[i].class_time);
      let dayIndex = dayToIndex(classDays[i].day);
      if (timeIndex === (squareNumber % 10) && dayIndex === dayRowIndex) {
        tag = classDays[i].class;
        break;
      }
    }

    return (
      <Square
        onClick={() => this.props.onClick(squareNumber)}
        value={tag}
      />
    );
  }


  render() {
    return (
      <table >
        <tbody>
          <tr>
          <th scope="row">:></th>
          <th>07:30</th>
          <th>09:00</th>
          <th>11:00</th>
          <th>14:00</th>
          <th>16:00</th>
          </tr>
          <tr>
          <th>شنبه</th>
          <td>{this.renderSquare(10, "", 0)}</td>
          <td>{this.renderSquare(11, "", 0)}</td>
          <td>{this.renderSquare(12, "", 0)}</td>
          <td>{this.renderSquare(13, "", 0)}</td>
          <td>{this.renderSquare(14, "", 0)}</td>
          </tr>
          <tr>
          <th>یکشنبه</th>
          <td>{this.renderSquare(20, "", 1)}</td>
          <td>{this.renderSquare(21, "", 1)}</td>
          <td>{this.renderSquare(22, "", 1)}</td>
          <td>{this.renderSquare(23, "", 1)}</td>
          <td>{this.renderSquare(24, "", 1)}</td>
          </tr>
          <tr>
          <th>دوشنبه</th>
          <td>{this.renderSquare(30, "", 2)}</td>
          <td>{this.renderSquare(31, "", 2)}</td>
          <td>{this.renderSquare(32, "", 2)}</td>
          <td>{this.renderSquare(33, "", 2)}</td>
          <td>{this.renderSquare(34, "", 2)}</td>
          </tr>
          <tr>
          <th>سه شنبه</th>
          <td>{this.renderSquare(40, "", 3)}</td>
          <td>{this.renderSquare(41, "", 3)}</td>
          <td>{this.renderSquare(42, "", 3)}</td>
          <td>{this.renderSquare(43, "", 3)}</td>
          <td>{this.renderSquare(44, "", 3)}</td>
          </tr>
          <tr>
          <th>چهارشنبه</th>
          <td>{this.renderSquare(50, "", 4)}</td>
          <td>{this.renderSquare(51, "", 4)}</td>
          <td>{this.renderSquare(52, "", 4)}</td>
          <td>{this.renderSquare(53, "", 4)}</td>
          <td>{this.renderSquare(54, "", 4)}</td>
          </tr>
        </tbody>

      </table>
    );
  }
}

class Container extends React.Component {

  onSquareClick = (i) => {
    console.log("Clicked " + i);
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Table
            onClick={this.onSquareClick}
            classDays={this.props.classDays}
          />
        </div>
      </div>
    );
  }
}

export default Container;
