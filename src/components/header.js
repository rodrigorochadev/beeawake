import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from '../assets/images/logo/logo.svg'
import { HeaderS, Logo, Menu } from "../styles/headerStyles"

const Header = () => (  
  <HeaderS >
      <Menu>
        <ul>
          <li><Link to="/">Inspire</Link></li>
          <li><Link to="/">Healthy</Link></li>
          
        </ul>
      </Menu>
      <Logo>
        <Link to="/">
          <img src={logo} alt="Bee Awake" />
        </Link>
      </Logo>
      <Menu>
        <ul>
          <li><Link to="/">Sobre</Link></li>
          <li><Link to="/">Contactos</Link></li>
        </ul>
      </Menu>
      {/* <Hamburger>
        Menu
      </Hamburger> */}
  </HeaderS>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
