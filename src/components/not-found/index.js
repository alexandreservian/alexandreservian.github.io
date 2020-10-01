import React from "react"
import { Link } from "gatsby"
import { Content } from "./style"

const NotFound = () => {
  return (
    <Content>
      <h1>404</h1>
      <p>Acho que você não vai encontrar nada por aqui :(</p>
      <Link to="/">Voltar ao blog</Link>
    </Content>
  )
}

export default NotFound
