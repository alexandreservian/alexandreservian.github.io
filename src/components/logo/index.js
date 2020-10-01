import React from "react"
import { Link } from "gatsby"
import { Content } from "./style"
import urlLogo from "../../images/alexandre-servian.svg"

const Logo = () => {
  return (
    <Content>
      <Link to="/">
        <img
          src={urlLogo}
          alt={"Alexandre Servian - Desenvolvedor Front-end"}
        />
      </Link>
    </Content>
  )
}

export default Logo
