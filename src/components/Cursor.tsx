import React, { FC } from "react";

export const Cursor: FC = () => {
  return (
    <div className="w-[64px] h-[64px] border rounded-full bg-white z-10">
      <div className="w-[16px] h-[16px] border rounded-full bg-red-500"></div>
    </div>
  );
};
