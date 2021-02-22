import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Bienvenue sur SONGSO e-commerce</h1>
    <h2>Le premier site web professionel specialise dans la vente et location de moutons et boeufs au Burkina-Faso</h2>
    <p>SONGSO est le site Web dedié a fournir un acces facile aux promoteurs, eleveurs et vendeur de viande d'elevage de qualite au Burkina-Faso</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Gallerie photos moutons</Link> <br />
    <Link to="/page-3/">Gallerie photos boeufs</Link> <br />
    <Link to="/page-4/">A propos de SONGOSO Burkina</Link> <br />
    <Link to="/page-5/">Formulaire de commandes</Link>
  </Layout>
)

export default IndexPage
