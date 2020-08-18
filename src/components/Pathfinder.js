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
        currentRow.push([]);
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
    return (
      <div className="Pathfinder">
        <div className="grid">
          {this.state.nodes.map((row, rowIndex) => {
            return (
              <div>
                {row.map((node, nodeIndex) => (
                  <Node />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Pathfinder;
