import React from "react"

import { COLORS } from "../styles/constants"

const SectionHeader = ({ title, description }) => (
  <>
    <div style={{ 
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    }}>
      <h2>{title}</h2>
      <p style={{ color: COLORS.grey, textAlign: "left", maxWidth: 600 }}>{description}</p>
    </div>
  </>
)

export default SectionHeader
