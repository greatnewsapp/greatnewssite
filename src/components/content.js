import React from "react"

import TravellingNews from "../images/TravellingNews.png"
import HyperlocalNews from "../images/HyperlocalNews.png"
import OnDemandNews from "../images/OnDemandNews.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "2rem 1rem", textAlign: "center" }}>
    
    <SectionHeader
      title="NEWS ON DEMAND"
      description="There are situations when you need information beyond regular channels or forwards. Wish you knew someone there to confirm."
    />

    <div style={{ margin: "0 0 80px 0" }}>
    </div>

    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
    
      <div>
        <img src={OnDemandNews} alt="on demand news by reporter" />
      </div>
      <div style={{ textAlign: "left"}}>
        <h3 style={{ color: COLORS.black }}>Your own Reporter</h3>
        <p>
          Point to the location, topic &amp; get  a coverage. Real-estate, investments,
          sports, politics, events, or anything else..
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
        <img src={HyperlocalNews} alt="hyper local news" />
      </div>
      <div style={{ textAlign: "left"}}>
        <h3 style={{ color: COLORS.black }}>Go Hyper Local</h3>
        <p>
          There is lot more happening around you apart from weather &amp; traffic. Zoom-in news by location. Get alerts, stay safe.
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
        <img src={TravellingNews} alt="Destination news" />
      </div>
      <div style={{ textAlign: "left"}}>
        <h3 style={{ color: COLORS.black }}>Destination Report</h3>
        <p>
          Connect with current travellers or locals around the place. Get real-time situation report. Be better prepared. 
        </p>
      </div>      
    </content>
    
  </div>
)

export default Content
