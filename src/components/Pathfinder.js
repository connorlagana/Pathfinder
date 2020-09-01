import React from "react";
import { Component } from "react";
import Node from "./Node";

class Pathfinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
    };
  }

  createGrid = () => {
    let nodes = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        const currentNode = {
          col,
          row,
          // isStart: row === 10 && col === 5,
          // isFinish: row === 10 && col === 45,
        };
        currentRow.push(currentNode);
      }
      nodes.push(currentRow);
    }

    this.setState({
      nodes: nodes,
    });
  };
  async componentDidMount() {
    await this.createGrid();

    console.log(this.state);
  }
  render() {
    return (
      <div className="Pathfinder">
        <div className="grid">
          {this.state.nodes.map((row, rowIndex) => {
            return row.map((node, nodeIndex) => {
              return <Node />;
            });
          })}
        </div>
      </div>
    );
  }
}

export default Pathfinder;
