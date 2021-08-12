import React from "react"
import { Link } from "gatsby"

const Hero = () => (
  <div className="container py-12 lg:pb-16">
    <div className="container w-full lg:w-3/4 justify-center">
      <Link to="/">
      <img alt="Bronwen Latham" className="w-full" src="header3.svg" /></Link>
    
    <h2>
      <span className="py-2 text-3xl font-roboto font-bold text-gray-900 md:flex md:justify-evenly">
      <tr>Journalist </tr>
      <img alt="point" className="hidden w-2 md:block" src="point.svg" />
      <tr>Content Writer</tr>
      <img alt="point" className="hidden w-2 md:block" src="point.svg" />
      <tr>Radio Presenter</tr>
      </span>
    </h2>
    </div>
  </div>
)

export default Hero
