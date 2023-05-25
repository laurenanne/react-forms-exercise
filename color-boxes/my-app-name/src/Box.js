import React from "react";

function Box(props) {
  return (
    <div>
      <div
        style={{
          height: `${props.height}px`,
          width: `${props.width}px`,
          backgroundColor: props.backgroundColor,
        }}
        className="Box"
      ></div>
      <div id={props.id} onClick={props.delBox}>
        <button>X</button>
      </div>
    </div>
  );
}

export default Box;
