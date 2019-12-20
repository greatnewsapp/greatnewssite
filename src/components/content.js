import React from "react"

import feature from "../images/feature.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "2rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Direct to you News"
      description="Go beyond traffic, or restaurants and get real news on the map."
    />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
    <div>
      <h3>Travelling</h3>
      <p style={{ color: COLORS.gray }}>
      Travelling to a new destination. Get & view latest news from local people or current travellers around that destination.
      </p>
    </div>

    <div>
      <h3>On Demand News</h3>
      <p style={{ color: COLORS.gray }}>
      Invested in ABC company affected by strike or plant shutdown. Want to know what is happening at that location. Ask local people over there.
      </p>
    </div>

    <div>
      <h3>Hyper Local news</h3>
      <p style={{ color: COLORS.gray }}>
      Read/View your latest local area news contributed by people. Zoom in news on Google Map.
      </p>
    </div>

      {/* <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>       */}
    </content>
  </div>
)

export default Content
