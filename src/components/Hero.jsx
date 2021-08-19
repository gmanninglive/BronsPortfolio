import React from "react"
import { Link } from "gatsby"

const Hero = () => (
  <div className="container py-12 lg:pb-16">
    <div className="container w-full lg:w-3/4 justify-center">
      <Link to="/">
      <img alt="Bronwen Latham" className="w-full" src={`${__dirname}header3.svg`} /></Link>
    
    <h2>
      <span className="py-2 text-3xl font-roboto font-bold text-gray-900 md:flex md:justify-evenly">
      Journalist <br />
      <img alt="point" className="hidden w-2 md:block" src={`${__dirname}point.svg`} />
      Content Writer <br />
      <img alt="point" className="hidden w-2 md:block" src={`${__dirname}point.svg`} />
      Radio Presenter
      </span>
    </h2>
    </div>
  </div>
)

export default Hero
