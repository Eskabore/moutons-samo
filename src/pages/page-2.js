import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page-2" />
    <h1>Gallerie photos des moutons et brebis</h1>
    <p>Dans notre gallerie sont uniquement exposés des éléments ayant subis un controle veterinaire exigeant et <br /> remplissant notre cahier de charge pour assurer une viande ou une reproduction de qualite superieurs aux standards actuellement proposes sur les marches locaux </p>
    <Link to="/">Retour a la page principale</Link> <br />
    <Link to="/page-3/">Gallerie photos boeufs</Link> <br />
    <Link to="/page-4/">A propos de SONGOSO Burkina</Link> <br />
    <Link to="/page-5/">Formulaire de commandes</Link>
  </Layout>
)

export default SecondPage
