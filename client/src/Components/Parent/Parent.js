import React, { Component } from 'react';
import '../Parent/Parent.css';

export default class Parent extends Component {
    render() {
        return (
            <div>
                <section id="top">
                    <h2>Harrison Voorhees' Photography Portfolio</h2>
                </section>

                <section id="center">
                    <div class="pra" id="right">
                    <p>Cdking is an open Source video cms Script That is write in follwing Language's:</p>
                </div>
                <div class="pra" id="left">
                    <ul >
                        <li>Php</li>
                        <li>Html</li>
                        <li>Javascript</li>
                        <li>Css</li>
                    </ul>
                </div>	
                </section>

                <footer>
                    <h2>About Harrison</h2>
                    <p>cdking is Open source web developer team have some users experiance you can hire our team from freelancer or mail us:-</p>
                    <a href="mailto:chiragpipaliya030@gmail.com">Chiragpipaliya030@gmail.com</a>
                    <p class="create">Created by cdking.info</p>
                </footer>
            </div>
        )
    }
}
