import React from 'react';

export default function chartBars(props) {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" {...props}>
      <g strokeWidth={4} transform="translate(0, 0)">
        <line data-color="color-2" fill="none" stroke="#6e6d6d" strokeWidth={4} strokeLinecap="square" strokeMiterlimit={10} x1={2} y1={58} x2={62} y2={58} strokeLinejoin="miter" />
        <rect x={4} y={24} fill="none" stroke="#6e6d6d" strokeWidth={4} strokeLinecap="square" strokeMiterlimit={10} width={12} height={26} strokeLinejoin="miter" />
        <rect x={26} y={6} fill="none" stroke="#6e6d6d" strokeWidth={4} strokeLinecap="square" strokeMiterlimit={10} width={12} height={44} strokeLinejoin="miter" />
        <rect x={48} y={34} fill="none" stroke="#6e6d6d" strokeWidth={4} strokeLinecap="square" strokeMiterlimit={10} width={12} height={16} strokeLinejoin="miter" />
      </g>
    </svg>
  );
}
