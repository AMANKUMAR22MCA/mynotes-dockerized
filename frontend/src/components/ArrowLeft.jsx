import React from 'react';

function ArrowLeft({ onClick }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      onClick={onClick}  // Add the onClick handler here
      style={{ cursor: 'pointer' }} // Optional: Adds a pointer cursor when hovering over the icon
    >
      <title>chevron-left</title>
      <path d="M11 16l13-13v-3l-16 16 16 16v-3l-13-13z"></path>
    </svg>
  );
}

export default ArrowLeft;
