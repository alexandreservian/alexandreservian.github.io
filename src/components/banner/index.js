import React from "react"
import Img from "gatsby-image"
import { Content, Author } from "./style"

const Banner = ({ author, hrefBanner, image }) => {
  return (
    <Content>
      <Img fluid={image} alt={`Foto por ${author}`} />
      <Author>
        <span>Foto por </span>
        <a href={hrefBanner} target="_blank" rel="noreferrer">
          {author}
        </a>
      </Author>
    </Content>
  )
}

export default Banner
