import React from "react"
import { Link } from "gatsby"
import { Content, Folder, Date, Title } from "./style"

const PostLink = ({ date, folder, path, title }) => {
  const folders = folder.join("/")
  return (
    <Content>
      <Link to={path}>
        <Folder>{folders}</Folder>
        <Date>({date})</Date>
        <Title>{title}</Title>
      </Link>
    </Content>
  )
}

export default PostLink
