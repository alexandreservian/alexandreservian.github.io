import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import NotFound from "../components/not-found"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFound />
  </Layout>
)

export default NotFoundPage
