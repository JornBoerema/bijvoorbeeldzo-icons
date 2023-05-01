import * as React from "react";
const SvgArrowsUp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 20V4m0 0L3 8m4-4 4 4m6 12V9m0 0-4 4m4-4 4 4"
    />
  </svg>
);
export default SvgArrowsUp;
