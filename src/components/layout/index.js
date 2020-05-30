import React from "react"
import PropTypes from "prop-types"
import Header from "../header"
import Footer from "../footer"
import { MainContent } from "./style"
import "../../assets/css/layout.css"
import "../../assets/css/prism-nord.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MainContent>
        <main>{children}</main>
      </MainContent>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
