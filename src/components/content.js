import React from "react"

import TravellingNews from "../images/TravellingNews.png"
import HyperlocalNews from "../images/HyperlocalNews.png"
import OnDemandNews from "../images/OnDemandNews.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "2rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Views without the filters"
      description="On Demand & Direct. Want a point of view? Just ask for it."
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
        <img src={TravellingNews} alt="a blank card floating over colorful graphics" />
      </div>
      <div style={{ textAlign: "left"}}>
        <h3 style={{ color: COLORS.gray }}>Travelling?</h3>
        <p>
          Connect with current travellers or locals around the place. Real-time situation report. 
        </p>
      </div>      
    </content>

    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
    
      <div>
        <img src={OnDemandNews} alt="a blank card floating over colorful graphics" />
      </div>
      <div style={{ textAlign: "left"}}>
        <h3 style={{ color: COLORS.gray }}>On Demand</h3>
        <p>
          Planning an investment. Get a ground reporter on demand for an exclusive report.
        </p>
      </div>      
    </content>


    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
    
      <div>
        <img src={HyperlocalNews} alt="a blank card floating over colorful graphics" />
      </div>
      <div style={{ textAlign: "left"}}>
        <h3 style={{ color: COLORS.gray }}>Go Hyper Local</h3>
        <p>
          Read/View latest area news contributed by people. Zoom in news on Maps. Get Notified.
        </p>
      </div>      
    </content>

    
  </div>
)

export default Content
