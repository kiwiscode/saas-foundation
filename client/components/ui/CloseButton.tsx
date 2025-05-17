import React from "react";

interface CloseButton {
  width: number;
  height: number;
  onCloseButton: () => void;
}

const CloseButton = ({ width, height, onCloseButton }: CloseButton) => {
  return (
    <svg
      className="cursor-pointer"
      onClick={onCloseButton}
      xmlns="http://www.w3.org/2000/svg"
      id="Outline"
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z" />
    </svg>
  );
};

export default CloseButton;
