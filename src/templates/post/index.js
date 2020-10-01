import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/seo"
import Layout from "../../components/layout"
import HeaderPost from "../../components/header-post"
import Banner from "../../components/banner"
import { Content, BlogContent } from "./style"

const Post = ({ data }) => {
  const { markdownRemark } = data
  const {
    frontmatter: { title, date, subTitle, banner },
    timeToRead,
    html,
  } = markdownRemark
  const { author, href: hrefBanner, image } = banner
  const {
    childImageSharp: { fixed, fluid },
  } = image
  return (
    <Layout>
      <Seo title={title} description={subTitle} image={fixed.src} />
      <Content>
        <HeaderPost
          title={title}
          subTitle={subTitle}
          date={date}
          timeToRead={timeToRead}
        />
        <Banner author={author} hrefBanner={hrefBanner} image={fluid} />
        <BlogContent>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </BlogContent>
      </Content>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date(locale: "pt-br", formatString: "DD/MM/YYYY")
        path
        title
        subTitle
        banner {
          author
          href
          image {
            childImageSharp {
              fluid(maxWidth: 1200, maxHeight: 750) {
                ...GatsbyImageSharpFluid
              }
              fixed(width: 1200, height: 1200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
