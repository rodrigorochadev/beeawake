import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import introVideo from '../assets/videos/intro.mp4'
import { Video } from "../styles/videoStyles"
import { BannerDiv, BannerText } from "../styles/bannerStyles"

const IndexPage = () => (
  <Layout>
    <SEO title="Bem Vindo!" />
    <Video>
      <video height='100%' width='100%' muted loop autoPlay src={introVideo}></video>
    </Video>
    <BannerDiv>
      <BannerText>
        Bee Awake
      </BannerText>
    </BannerDiv>
    
    <div style={{color: 'white', background: 'black', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: "center", minHeight: '40vh', alignItems: 'center'}}>
      <h2>Página em construção.</h2>
      <p>Por favor volte mais tarde, ou contacte-nos pelas nossas redes sociais.</p>
    </div>

  </Layout>
)

export default IndexPage
