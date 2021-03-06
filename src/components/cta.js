import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"
import whatsapp from "../images/whatsapp.png"

const CallToAction = () => (
  <div style={{ padding: "2rem 1rem", textAlign: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>
    <SectionHeader
      title="Limited Preview"
      description="Join the invite list to be first to receive great news!"
    />
    <Button>GET EARLY ACCESS</Button>
    <div style={{ display: "flex", margin: "6px"}}>
      <img style={{width: "24px", height: "24px"}} src={whatsapp} alt="whatsapp"></img>
      <small style={{color: "grey", paddingLeft: "3px", fontSize: "15px"}}>Join our WhatsApp group</small>
    </div>
  </div>
)

export default CallToAction
