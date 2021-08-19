require("dotenv").config()
const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env

module.exports = {
  siteMetadata: {
    menu:[
      { name: "Home", to: "/" },
      { name: "About", to: "/about" },],
    links: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      twitter: "https://twitter.com/",
    },
    locale: "en",
    title: `Bronwen Latham`,
    description: `Portfolio of Bronwen Latham`,
    author: `Bronwen Latham`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images/`,
          ignore: [`**/\.*`], // ignore files starting with a dot
        },
     },
       {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bronwen Latham`,
        short_name: `bronwenlatham`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3182ce`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
