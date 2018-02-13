import React from 'react';

const Svg = (props) => (
  <svg width="100%" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="linearGradient-1">
        <stop stopColor="#88F3E3" offset="0%" />
        <stop stopColor="#BCC8FF" offset="100%" />
      </linearGradient>
      <circle id="path-2" cx="50" cy="50" r="50" />
      <mask id="mask-3" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="100" height="100" fill="white">
        <use xlinkHref="#path-2" />
      </mask>
    </defs>
    <g id="Page-1" onClick={props.svgClick} stroke="none" strokeWidth="0" fillRule="evenodd">
      <use id="Oval" fill="url(#linearGradient-1)" stroke="url(#linearGradient-1)" mask="url(#mask-3)" strokeWidth="12" xlinkHref="#path-2" />
      <text x="50%" y="50%" alignmentBaseline="middle" textAnchor="middle">Menu</text>
    </g>
  </svg>
);

export default Svg;
