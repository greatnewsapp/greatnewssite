import React from "react"
import PropTypes from "prop-types"

import Button from "../components/button"
import EmailSubscription from "../components/email-subscription"
import headerImage from "../images/header.png"
import MockupContent from "./image"
import mockupFrame from "../images/mockup-frame.png"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
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
        opacity: 0.4,
      }}
    />
    <h1 style={{ textAlign: "center" }}>GREAT NEWS APP</h1>
    <p style={{ textAlign: "center", maxWidth: 440 }}>
      News that you want and 
      not what the publishers &amp; producers want to show. 
    </p>
    <EmailSubscription
      title="Get Early Access"
      placeholder="Enter your email Id"
    />
    {/* <Button>Get Early Access</Button> */}
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
