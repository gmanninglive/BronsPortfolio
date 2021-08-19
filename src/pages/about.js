import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import Social from "../components/Social"
import Hero from "../components/Hero";
import ContactForm from "../components/Contact"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="About" description="Bronwen Latham Bio" />
    <Hero />
    <div className="bg-gray-900">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
{/*AboutMe*/}<h1 className="text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-4xl">
              About me
               </h1>
{/*Description*/}<div className=" mt-4 leading-loose text-white">
                  Hi I am a freelance journalist and currently write for 3 publications; 
                   CityGirl Network, Writeous and QM Records Blog specialising in politics, 
                    culture and lifestyle. I have just graduated from Bimm University with a 
                     First Class Honours in Songwriting BA and I am starting a part time MA in 
                      Journalism Broadcasting in September. <br/><br/>
                       I host two fortnightly radio shows on PlatformB Radio: Bluezy Tues and The Superluna Hour. 
                        I founded both shows with focus on celebrating female/non-binary artists starting their careers in the music industry.
                         <br /><br />
                          I specialise in investigative journalism with the aim to share with the public the truths behind closed doors. 
{/*Contact Grid*/}       <div className= "grid grid-cols-1 divide-y divide-white mt-20">
                        <b className="flex justify-center text-white text-xl">Please feel free to contact me at:</b>
                       <br />
                      <div className="flex justify-around py-2 ">
                     <a href="mailto:bronwenlath@gmail.com" className=" hover:border-blue-600 text-white hover:text-blue-600">bronwenlath@gmail.com
                       </a>
{/*Socials*/}             <span className="pt-2"><Social /></span>
{/*Contact Form*/}          </div><div className="container justify-center my-2 text-black"><ContactForm /></div>
                                </div>
                            </div>
                         </div>
                      <div className="container justify-center w-3/4 h-3/4 md:w-1/2 xl:w-2/5 md:pl-12 ">
{/*Portrait/Photo*/}  <GatsbyImage image={data.author.childImageSharp.gatsbyImageData} alt="Bronwen Latham" className="rounded-full shadow-md" />
                  </div>
              </div>
          </div>
      </div>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    author: file(relativePath: { eq: "author.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 600, quality: 85)
      }
    }
  }
`