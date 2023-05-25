import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box.js";
import { v4 as uuid } from "uuid";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const delBox = (evt) => {
    const boxId = evt.currentTarget.id;
    const newBoxes = boxes.filter(function(box) {
      return box.id !== boxId;
    });
    setBoxes(newBoxes);
  };

  const renderItems = () => {
    return (
      <div>
        {boxes.map((b) => (
          <Box
            key={b.id}
            id={b.id}
            width={b.width}
            height={b.height}
            backgroundColor={b.backgroundColor}
            delBox={delBox}
          />
        ))}
      </div>
    );
  };

  const addBox = (b) => {
    let newBox = { ...b, id: uuid() };
    setBoxes((boxes) => [...boxes, newBox]);
  };

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {renderItems()}
    </div>
  );
}

export default BoxList;
