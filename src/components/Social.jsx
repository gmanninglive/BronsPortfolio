// import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"

const Social = () => {
  const links = { facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/bron.lath/",
      twitter: "https://twitter.com/bronwenlatham/",
      linkedin: "https://linkedin.com/in/bronwenlatham/",}
 
//   } = useStaticQuery(graphql`
//     query SocialQuery {
//       site {
//         meta: siteMetadata {
//           links {
//             instagram
//             twitter
//             linkedin
//           }
//         }
//       }
//     }
//   `)

  return (
      <ul className="flex justify-center md:order-2">
        <SocialLink href={links.linkedin} icon={FaLinkedin} label="Linkedin" />
        <SocialLink href={links.instagram} icon={FaInstagram} label="Instagram"/>
        <SocialLink href={links.twitter} icon={FaTwitter} label="Twitter" />
        
      </ul>
  )
}

const SocialLink = ({ href, label, icon: Icon }) => {
  return (
    <li className="inline-block pl-6">
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="text-gray-500 hover:text-blue-600 transition duration-150 ease-in-out"
      >
        <span className="sr-only">{label}</span>
        <Icon className="w-5 h-5 fill-current" />
      </a>
    </li>
  )
}

export default Social;
