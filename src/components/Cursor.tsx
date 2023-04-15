import React, { FC, useEffect, useState } from "react";

type cursorPosition = {
  x: number;
  y: number;
};

export const Cursor: FC = () => {
  const [position, setPosition] = useState<cursorPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", mMove);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", mMove);
    };

    const mMove = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <div
      className="hidden md:block cursor-dot-outline"
      id="cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
};
