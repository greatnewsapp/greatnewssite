import React, { Component } from "react"

// import { COLORS, BORDER_RADIUS, GRADIENT } from "../styles/constants"
import "../styles/button.css"
import SectionHeader from "./section-header"
import { useAsync } from "react-async"
// import { postData } from "./postData";
import axios from 'axios';

const subscribeEmail = async (email) => {
    let emailData = {email: email};
    // let response = await fetch('https://us-central1-great-news-app.cloudfunctions.net/pushSubscribedEmail', {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json; charset=utf-8'
    //     },
    //     body: emailData // body data type must match "Content-Type" header
    // });
    // if (response.ok) {
    //     let data = await response.json()
    //     return data;    
    // } else {
    //     return "error"
    // } 
    
    
    try {
        const response = await axios.post('https://us-central1-great-news-app.cloudfunctions.net/pushSubscribedEmail', { "email": email });
        console.log('👉 Returned data:', response);
      } catch (e) {
        console.log(`😱 Axios request failed: ${e}`);
      }
      
}

class EmailSubscription extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let email = this.inputNode.value
        console.log(email)
        this.inputNode.value = "";``

        // $.post('https://us-central1-great-news-app.cloudfunctions.net/pushSubscribedEmail', 
        // {'email': email}, 
        // function (data, status) {
        //     console.log(`data ${data} | ${JSON.stringify(data)} | status ${status}`);
        // })

        subscribeEmail(email).then((data) => {
            console.log(`handleSubmit data ${data} | ${JSON.stringify(data)}`);
        }).catch((error) => {
            console.log(`handleSubmit error ${error}`);
        });
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
