import { graphql } from "gatsby"
import React from "react"
import Cards from "../components/Cards"
import Hero from "../components/Hero"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="Home" description="Portfolio of Bronwen Latham" />

      <Hero />

      <div className="bg-gray-900 py-12 lg:py-16">
        <div className="container font-bold text-4xl text-white"><h1><span >Portfolio</span></h1></div>
        {data.portfolio && data.portfolio.nodes.length > 0 ? (
          <Cards items={data.portfolio.nodes} />
        ) : (
          <div className="container">No projects found.</div>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query Query {
    portfolio: allContentfulPortfolio {
      nodes {
        ...PortfolioCard
      }
    }
  }
`
