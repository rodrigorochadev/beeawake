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
  
    {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/kXLCDlzezUY?autoplay=1&controls=0&loop=1&modestbranding" frameborder="0" allowfullscreen></iframe> */}
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
