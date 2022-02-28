import React from "react";
const RoadMapGridItem = (props) => {
  return (
    <div className="roadmap-grid-item" {...props}>
      {props.chilren}
    </div>
  );
};
export default RoadMapGridItem;
