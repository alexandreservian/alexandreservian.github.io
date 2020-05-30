import React from "react"
import { Link } from "gatsby"
import { Content, Folder, Parenthesis, Date, Code, Title } from "./style"

const PostLink = ({ date, folder, path, title }) => {
  const folders = folder.join("/")
  return (
    <Content>
      <Link to={path}>
        <Folder>~/{folders}</Folder>
        <Parenthesis>(</Parenthesis>
        <Date>{date}</Date>
        <Parenthesis>)</Parenthesis>
        <Code>$</Code>
        <Title>{title}</Title>
      </Link>
    </Content>
  )
}

export default PostLink
