import React, { FC, useEffect, useState } from "react";

export const Cursor: FC = () => {
  const [cursorx, setCursorx] = useState<any>();
  const [cursory, setCursory] = useState<any>();

  window.addEventListener("mousemove", (e) => {
    setCursorx(e.pageX);
    setCursory(e.pageY);
  });

  return (
    <div
      className="cursor-dot-outline"
      id="cursor"
      style={{ left: cursorx + "px", top: cursory + "px" }}
    >
      {/* <div className="cursor-dot"></div> */}
    </div>
  );
};
