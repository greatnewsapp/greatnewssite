import React, { Component } from "react"

import { COLORS, BORDER_RADIUS, GRADIENT } from "../styles/constants"
import "../styles/button.css"

class Button extends Component {
  constructor(props) {
      super(props);
  }

  handleClick = (event) => {
    event.preventDefault()
    window.open('https://chat.whatsapp.com/IVVC3Auv2pXFVHf6uPxNqc', "_blank");
  }
  
  render() {
      return (
        <div>
          <button
          style={{
            padding: ".5rem 2.5rem",
            color: COLORS.lightWhite,
            fontWeight: 700,
            background: GRADIENT,
            borderRadius: BORDER_RADIUS,
            borderWidth: 0,
            cursor: "pointer",
          }}
          onClick={this.handleClick}
          >
            {this.props.children}
          </button>

        </div>
      );
  }
}
// const Button = ({ children }) => (
//   <button
//     style={{
//       padding: ".5rem 2.5rem",
//       color: COLORS.lightWhite,
//       fontWeight: 700,
//       background: GRADIENT,
//       borderRadius: BORDER_RADIUS,
//       borderWidth: 0,
//       cursor: "pointer",
//     }}
//     onClick={this.handleClick}
//   >
//     {children}
//   </button>
// )

export default Button
