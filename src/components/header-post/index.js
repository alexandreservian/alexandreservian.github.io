import React from "react"
import { Content, Date } from "./style"

const HeaderPost = ({ title, subTitle, date, timeToRead }) => {
  return (
    <Content>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <Date>
        <span>{date} - </span>
        <span>{timeToRead} min read</span>
      </Date>
    </Content>
  )
}

export default HeaderPost
