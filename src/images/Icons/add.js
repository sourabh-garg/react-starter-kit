import React from 'react';

export default function add(props) {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" {...props}>
      <g strokeWidth={3} transform="translate(0.5, 0.5)">
        <line fill="none" stroke="#ffffff" strokeWidth={3} strokeLinecap="square" strokeMiterlimit={10} x1={32} y1={4} x2={32} y2={60} strokeLinejoin="miter" />
        <line fill="none" stroke="#ffffff" strokeWidth={3} strokeLinecap="square" strokeMiterlimit={10} x1={60} y1={32} x2={4} y2={32} strokeLinejoin="miter" />
      </g>
    </svg>
  );
}
