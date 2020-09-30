import React from "react"

import SEO from "../components/seo"

import logo from '../assets/images/logo/logo.svg'
import { Link } from "gatsby"

const NotFoundPage = () => (
  <>
  <SEO title="Página não encontrada" />
  <div style={{minHeight: '95vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <img style={{height: '60px', width: 'auto'}} src={logo} alt="Bee Awake" />
    <div style={{marginBottom: '20px'}}></div>
    <p>Página não encontrada.</p>
    <Link to="/">Página Principal</Link>
  </div>
  </>
)

export default NotFoundPage
