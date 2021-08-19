import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import PropTypes from "prop-types"

const Card = ({ portfolio }) => {
   const { name, slug, summary } = portfolio

  const image = portfolio.image;

  return (
    <div className="bg-white h-full shadow-sm rounded-lg overflow-hidden group">
      <Link to={`/${slug}`}>
        <div className="group-hover:opacity-50 transition duration-150 ease-in-out">
         {image != null? <GatsbyImage image={image.gatsbyImageData} alt={image.title} />: <div></div>}
        </div>
        <div className="p-4 sm:p-5">
          <h1 className="sm:text-lg text-gray-900 font-semibold">{name}</h1>
          <p className="text-sm sm:text-base text-gray-700">{summary}</p>
        </div>
      </Link>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  image: PropTypes.object,
}

export default Card

export const query = graphql`
  fragment PortfolioCard on ContentfulPortfolio {
    id
    name
    slug
    image {
      gatsbyImageData
      title
    }
    summary
  }
`
