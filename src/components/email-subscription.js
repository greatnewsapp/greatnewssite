import React, { Component } from "react"

// import { COLORS, BORDER_RADIUS, GRADIENT } from "../styles/constants"
import "../styles/button.css"
import SectionHeader from "./section-header"
import { useAsync } from "react-async"
import { postData } from "./postData";

class EmailSubscription extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let email = this.inputNode.value
        console.log(email)
        this.inputNode.value = "";
        try {
            const data = postData('https://us-central1-great-news-app.cloudfunctions.net/pushSubscribedEmail', { "email": email });
            console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
          } catch (error) {
            console.error(error);
          }          
    }

    render() {
        return (
            <div style={{ padding: "4rem 1rem", textAlign: "center", width: "100%"}}>
                <SectionHeader
                title="Get Early Access"
                description="Join the invite list to be first to receive great news!"
                />
                <div style={{ margin: "0 auto", textAlign: "center", position: "relative", zIndex: "2" }}>
                    <input type="email" style={ {
                            width: "60%",
                            paddingLeft: "20px",
                            height: "50px",
                            background: "rgba(255, 255, 255, 0)",
                            border: "#243c4f",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderRadius: "20px 0 0 20px"
                        
                    }}
                        placeholder="Enter your email Id" ref={node => (this.inputNode = node)}/>
                    <span >
                    <button style={{
                        padding: "12px", 
                        minHeight: "50px", 
                        borderRadius: "0 20px 20px 0",
                        background: "#243c4f",
                        color: "#fff"
                        
                    }} type="submit" onClick={this.handleSubmit}>Subscribe</button>
                    </span>
                </div>
                <small style={{color: "rgb(176, 184, 186)"}}>We'll never share your email Id with anyone else.</small>
            </div>        
        );
    }
}

export default EmailSubscription
