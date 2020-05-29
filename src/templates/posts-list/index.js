import React from "react"
import PostLink from "../post-link"
import { Content, Item } from "./style"

const PostsList = ({ posts }) => {
  console.log(posts)
  return (
    <Content>
      {posts.map(({ node: { id, frontmatter } }) => (
        <Item key={id}>
          <PostLink {...frontmatter} />
        </Item>
      ))}
    </Content>
  )
}

export default PostsList
