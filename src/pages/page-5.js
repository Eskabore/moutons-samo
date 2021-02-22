import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FifthPage = () => (
    <Layout>
      <SEO title="Page-5" />
      <h1>Formulaire de commandes</h1>
      <p>Vous pouvez remplir tres simplement notre formulaire de commandes <br />
      vous pouvez egalement indiquez un poids minimum, la taille et la date de livraison mais ceci n'est pas obligatoire.<br />
      Nous nous engageons a vous forunir le meilleur qualite/prix et si vous n'etes pas satisfait on vous echange gratuitement votre troupeau </p>
      <Link to="/">Retour a la page principale</Link> <br />
      <Link to="/page-2/">Visitez notre gallerie photos de moutons</Link> <br />
      <Link to="/page-3/">Visitez notre gallerie photos de boeufs</Link> <br />
      <Link to="/page-4/">A propos de SONGOSO Burkina</Link>
    </Layout>
  )

  export default FifthPage
