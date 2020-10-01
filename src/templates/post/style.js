import styled from "@emotion/styled"

export const Content = styled.div`
  margin: 50px auto 0;
  padding: 0 20px;
  max-width: 850px;
`

export const BlogContent = styled.div`
  margin: 55px 0 0 0;
  font-size: 0.9em;
  a {
    color: #fff;
  }
  h3 {
    font-size: 1.7em;
    padding: 30px 0 0 0;
    margin: 0 0 30px 0;
  }
  h4 {
    font-size: 1.4em;
    padding: 30px 0 0 0;
  }
  p,
  blockquote,
  .gatsby-highlight {
    margin: 0 0 30px 0;
  }
  hr {
    margin: 0 0 50px 0;
    text-align: center;
    &:before {
      display: block;
      content: "...";
      letter-spacing: 25px;
    }
  }
  blockquote {
    position: relative;
    p {
      font-family: "hack-italic", monospace, arial;
    }
    &:before {
      background: #fff;
      display: block;
      content: "";
      width: 5px;
      height: 100%;
      position: absolute;
      left: -20px;
    }
  }
`
