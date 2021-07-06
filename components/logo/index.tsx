import React from "react";

const Logo = ({ fill, height = 32, width = 32 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      height={height}
      width={width}
      fill={fill ?? "#000"}
      viewBox="0 0 64 64"
    >
      <path
        fill="#fff"
        fillOpacity="0"
        stroke={fill}
        strokeWidth="8.3"
        d="M150 100l50 100H100l50-100z"
        transform="translate(-20.502 -13.364) scale(.6295) translate(43.5 56.429) scale(.3244)"
      ></path>
      <path
        fill="#fff"
        fillOpacity="0"
        stroke={fill}
        strokeWidth="8.3"
        d="M150 100l50 100H100l50-100z"
        transform="translate(-20.502 -13.364) scale(.6295) translate(9.114 -9.749) scale(.3244)"
      ></path>
      <path
        fill="#fff"
        fillOpacity="0"
        stroke={fill}
        strokeWidth="8.3"
        d="M150 100l50 100H100l50-100z"
        transform="translate(-20.502 -13.364) scale(.6295) matrix(.3244 0 0 -.3244 60.37 153.749)"
      ></path>
      <path
        fill="#fff"
        fillOpacity="0"
        stroke={fill}
        strokeWidth="8.3"
        d="M150 100l50 100H100l50-100z"
        transform="translate(-20.502 -13.364) scale(.6295) translate(59.72 23.34) scale(.3244)"
      ></path>
      <path
        fill="#fff"
        fillOpacity="0"
        stroke={fill}
        strokeWidth="8.3"
        d="M150 100l50 100H100l50-100z"
        transform="translate(-20.502 -13.364) scale(.6295) matrix(.3244 0 0 -.3244 42.852 120.66)"
      ></path>
      <path
        fill="#fff"
        fillOpacity="0"
        stroke={fill}
        strokeWidth="8.3"
        d="M150 100l50 100H100l50-100z"
        transform="translate(-20.502 -13.364) scale(.6295) matrix(.3244 0 0 -.3244 25.983 87.571)"
      ></path>
      <path
        fill="#fff"
        fillOpacity="0"
        stroke={fill}
        strokeWidth="8.3"
        d="M150 100l50 100H100l50-100z"
        transform="translate(-20.502 -13.364) scale(.6295) translate(25.983 23.34) scale(.3244)"
      ></path>
      <path
        fill="#fff"
        fillOpacity="0"
        stroke={fill}
        strokeWidth="8.3"
        d="M150 100l50 100H100l50-100z"
        transform="translate(-20.502 -13.364) scale(.6295) matrix(.3244 0 0 -.3244 9.114 120.66)"
      ></path>
    </svg>
  );
}

export default Logo;
