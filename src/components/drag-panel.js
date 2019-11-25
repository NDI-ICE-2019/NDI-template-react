import React, { Component } from "react";
import Draggable from "react-draggable";

class DragPanel extends Component {
  render() {
    return (
      <Draggable handle=".handle">
        <div>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
    );
  }
}

export default DragPanel;
