import React from "react"

import { COLORS } from "../styles/constants"

const SectionHeader = ({ title, description }) => (
  <>
    <div style={{ padding: "0 0 100px 0" }}>
      <h2>{title}</h2>
      <p style={{ color: COLORS.redLighten3 }}>{description}</p>
    </div>
  </>
)

export default SectionHeader
