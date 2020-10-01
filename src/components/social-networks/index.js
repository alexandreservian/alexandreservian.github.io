import React from "react"
import { Content, Item } from "./style"
import github from "../../images/icon-github.svg"
import linkedin from "../../images/icon-linkedin.svg"
import medium from "../../images/icon-medium.svg"
import instagram from "../../images/icon-instagram.svg"

const SocialNetWorks = () => {
  return (
    <Content>
      <Item>
        <a
          href="https://github.com/alexandreservian"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt={"GitHub"} />
        </a>
      </Item>
      <Item>
        <a
          href="https://www.linkedin.com/in/alexandre-servian-759a4347/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt={"Linkedin"} />
        </a>
      </Item>
      <Item>
        {" "}
        <a
          href="https://medium.com/@alexandreservian"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={medium} alt={"Medium"} />
        </a>
      </Item>
      <Item>
        {" "}
        <a
          href="https://www.instagram.com/aleservian/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt={"Instagram"} />
        </a>
      </Item>
    </Content>
  )
}

export default SocialNetWorks
