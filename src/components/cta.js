import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Limited Preview"
      description="Join the invite list to be first to receive great news!"
    />
    <Button>Get Early Access</Button>
  </div>
)

export default CallToAction
