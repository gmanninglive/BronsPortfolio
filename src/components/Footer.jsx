import React from "react"
import Social from "./Social"

const Footer = () => {
  return (
    <div className="container py-12 md:flex md:items-center md:justify-between">
      <Social />
      <div className="mt-8 md:mt-0 md:order-1">
        <p className="text-center text-sm md:text-base text-gray-700">
          &copy; 2021 Bronwen Latham. All rights reserved.
          {/* <br /> Website by George Manning. */}
        </p>
      </div>
      </div>
  )
}


export default Footer
