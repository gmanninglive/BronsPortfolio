import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Button from "../components/Button"
import Cards from "../components/Cards"
import Layout from "../layouts/Layout"

const PortfolioTemplate = ({ data: { portfolio } }) => {
  const {
    childContentfulPortfolioDescriptionTextNode,
    name,
    related,
    summary,
    image,
    url,
  } = portfolio

  return (
    <Layout>
      <SiteMetadata
        title={name}
        description={summary}
        image={image.gatsbyImageData}
      />
      <div className="container py-12 lg:pb-16">
    <div className="container w-full lg:w-3/4 justify-center">
     <Link to="/">
      <img alt="Bronwen Latham" className="w-full" src="header3.svg" /></Link>
    
    <h2>
      <span className="text-3xl font-roboto pt-6 font-bold text-gray-900 md:flex md:justify-evenly">
      Portfolio
      </span>
    </h2>
    </div>
  </div>
      <div className="bg-gray-900 py-12 lg:py-16">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full lg:pl-8 xl:pl-12">
              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl mb-1">
                {name}
              </h1>
              <h2 className="text-xl leading-tight font-semibold tracking-tight text-gray-300 sm:text-2xl">
                {summary}
              </h2></div><div className="w-full md:w-1/2 lg:pl-8 xl:pl-12">
              {childContentfulPortfolioDescriptionTextNode && (
                <div className="my-4 text-base text-gray-100 whitespace-pre-line">
                  {childContentfulPortfolioDescriptionTextNode.description}
                </div>
              )}{url && (
                <div className="mt-8 ">
                  <Button href={url}>View Published Article</Button>
                </div>
              )}
              
          </div><div className="container md:w-1/2 pt-8 pb-8 justify-center">
              <GatsbyImage image={image.gatsbyImageData}
                alt={image.title} className="rounded-lg"/>
            </div>
          </div>
        </div>
      </div>
      {related && (
        <div className="bg-gray-100 py-12 lg:py-16">
          <div className="container">
            <h2 className="text-3xl sm:text-4xl leading-tight font-extrabold tracking-tight text-gray-900 mb-8">
              You may also like
            </h2>
          </div>
          <Cards items={related} hideLastItemOnMobile={true} />
        </div>
      )}
    </Layout>
  )
}
export default PortfolioTemplate;

export const query = graphql`
  query PortfolioItemQuery($slug: String!) {
    portfolio: contentfulPortfolio(slug: { eq: $slug }) {
      childContentfulPortfolioDescriptionTextNode {
        description
      }
      image {
        gatsbyImageData
        title
      }
      name
      related {
        ...PortfolioCard
      }
      summary
      image {
        gatsbyImageData
      }
      url
    }
  }
`
