import * as React from "react"
import { SVGProps } from "react"
const JobIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M9 7H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-4M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M9 7h6"
    />
  </svg>
)
export default JobIcon
