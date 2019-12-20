import React from "react"
import PropTypes from "prop-types"

import Button from "../components/button"
import EmailSubscription from "../components/email-subscription"
import headerImage from "../images/header.png"
import MockupContent from "./image"
import whatsapp from "../images/whatsapp.png"
import mockupFrame from "../images/mockup-frame.png"
import SectionHeader from "./section-header"

import { COLORS } from "../styles/constants"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "2rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        "object-fit": "contain",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.3,
      }}
    />
    <h1 style={{ textAlign: "center", color: COLORS.black }}>GREAT NEWS <span style={{ color: COLORS.redLighten3 }}>APP</span></h1>
    <p style={{ textAlign: "center", maxWidth: 440 }}>
    Beyond the noise of TV debates; get <strong>reactions</strong> of <strong>real people</strong> on the ground by location.
    </p>
    <Button>GET EARLY ACCESS</Button>
    <div style={{ display: "flex", margin: "6px"}}>
      <img style={{width: "24px", height: "24px"}} src={whatsapp}></img>
      <small style={{color: COLORS.gray, paddingLeft: "3px", fontSize: "15px"}}>Join our WhatsApp Group</small>
    </div>
    <div style={{ margin: 60, width: `250px`, position: "relative" }}>
      <div style={{ clipPath: "inset(2% 5% round 2% 5%)" }}>
        <MockupContent />
      </div>
      <div
        style={{
          position: "absolute",
          width: "250px",
          top: 0,
        }}
      >
        <img
          src={mockupFrame}
          alt="outlines of app and map in the background "
        />
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
