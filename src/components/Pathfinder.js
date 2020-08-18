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
    for (let row = 0; row < 95; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        const currentNode = {
          col,
          row,
          isStart: row === 10 && col === 5,
          isFinish: row === 10 && col === 45,
        };
        currentRow.push(currentNode);
      }
      nodes.push(currentRow);
    }
    this.setState({
      nodes: nodes,
    });
  };
  componentDidMount() {
    this.createGrid();
  }
  render() {
    const { nodes } = this.state;
    console.log(nodes);
    return (
      <div className="Pathfinder">
        <div className="grid">
          {nodes.map((row, rowIndex) => {
            return (
              <div key={rowIndex}>
                {row.map((node, nodeIndex) => {
                  const { isStart, isFinish } = node;
                  return (
                    <Node
                      key={nodeIndex}
                      isStart={isStart}
                      isFinish={isFinish}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Pathfinder;
