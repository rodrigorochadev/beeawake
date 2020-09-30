import React from "react"
import { FooterContainer, FooterCopyright } from "../styles/footerStyles"

// import logo from '../assets/images/logo/logo.svg'

const Footer = () => {

    return(
        <FooterContainer>

            <FooterCopyright>
                Bee Awake - Desperta o Interior © {new Date().getFullYear()}.
            </FooterCopyright>
            
        </FooterContainer>
    )

}

export default Footer