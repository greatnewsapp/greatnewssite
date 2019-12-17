import React, { Component } from "react"

// import { COLORS, BORDER_RADIUS, GRADIENT } from "../styles/constants"
import "../styles/button.css"
import SectionHeader from "./section-header"
import { useAsync } from "react-async"
// import { postData } from "./postData";
import axios from 'axios';

const subscribeEmail = async (email) => {
    let emailData = {"email": email};
    let header = new Headers({
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json'
    });

    // let response = await fetch('https://us-central1-great-news-app.cloudfunctions.net/pushSubscribedEmail', {
    //     method: 'POST',
    //     mode: 'cors',
    //     header: header,
    //     body: emailData // body data type must match "Content-Type" header
    // });
    // if (response.ok) {
    //     let data = await response.json()
    //     console.log(`subscribeEmail data ${response} | ${data + ''} | ${JSON.stringify(data).length}`);
    //     return data;    
    // } else {
    //     return "error"
    // } 

    let sentData = {
        method:'POST',
        mode: 'cors',
        header: header,
        body: emailData
    };

    // fetch('https://us-central1-great-news-app.cloudfunctions.net/pushSubscribedEmail', sentData)
    // .then(response => {
    //     console.log(response);
    //     response.json().then((data) => {
    //         console.log(data);
    //     });
    // });

    
    return new Promise((reslove,reject) => {
        fetch('https://us-central1-great-news-app.cloudfunctions.net/pushSubscribedEmail', sentData)
            .then(response => response.json())
            .then(responseText => {
                let resp = typeof responseText === 'string' ? JSON.parse(responseText) : responseText;
                console.log(`subscribeEmail | resp ${resp} | ${JSON.stringify(responseText)} | ${typeof(responseText)} | ${typeof(resp)}`);
                reslove(resp);
            }).catch(err => {
                console.log(`subscribeEmail | err ${err}`);
                reject(err);
            });
    }).catch(err => {
        console.log(`subscribeEmail | err ${err}`);
        // reject(err);
    });
          
}

class EmailSubscription extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let email = this.inputNode.value
        console.log(email)
        this.inputNode.value = "";

        // $.post('https://us-central1-great-news-app.cloudfunctions.net/pushSubscribedEmail', 
        // {'email': email}, 
        // function (data, status) {
        //     console.log(`data ${data} | ${JSON.stringify(data)} | status ${status}`);
        // })

        subscribeEmail(email).then((data) => {
            console.log(`handleSubmit data 1 ${data} | | ${JSON.stringify(data)}`);
        }).catch((error) => {
            console.log(`handleSubmit error 1 ${error}`);
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
