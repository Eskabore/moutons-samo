import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FourthPage = () => (
  <Layout>
    <SEO title="Page-4" />
    <h1>A propos de SONGOSO</h1>
    <p>Fondee en 2019 par un entrepreuneur et homme d'affaire Burkinabe,SONGOSO a installe ses locaux a Montreal, CANADA(siege) et Boulbi, Burkina-Faso. La societe a comme engagements de fournir des betes et de la viande de qualite superieure a des prix competitifs.
    Par le developement de ses activites au Faso et a travers ses partenariats de plus en plus nombreux, SONGOSO est un acteur engage dans la creation d'emplois pour la et l'aide aux plus defavorises.
     </p>
    <Link to="/">Retour a la page principale</Link> <br />
    <Link to="/page-2/">Visitez notre gallerie photos de moutons</Link> <br />
    <Link to="/page-3/">Visitez notre gallerie photos de boeufs</Link> <br />
    <Link to="/page-5/">Formulaire de commandes</Link>
  </Layout>
)

export default FourthPage
