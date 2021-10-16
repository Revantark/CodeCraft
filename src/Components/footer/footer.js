import './footer.css'
import React from 'react'
import {useHistory} from 'react-router-dom'

export default function Footer(){
    const history= useHistory();
    
    return(
        <section className="footer">
            <div className="inner-footer">
                <div className="footer-items">
                    <h1>coding.Studio();</h1>
                    <i className="fas fa-code"></i>
                    <p>Programming Club - VBIT</p>
                    
                </div>
                <div className="footer-items">
                    <h3>Quick Links</h3>
                    <div className="border1"></div>
                    <ul className="list">
                        <a href="#landingPage" ><li>Home</li></a>
                        <a  onClick={()=>history.replace('/register')}>Register</a>
                        <a href="#codeCraft" ><li>About us</li></a>
                    </ul>
                </div>
                <div className="footer-items">
                    <h3>Contact Us</h3>
                    <div className="border1"></div>
                    <ul className="list">
                        <a href="https://g.page/coding-studio?share" target="_blank"> 
                        <li><i className="fa fa-map-marker"></i>c.S(); HQ-VBIT,Hyd</li>
                        </a>
                        <a href="tel:+918790805406" target="_blank"> 
                        <li><i className="fa fa-phone"></i>+918790805406</li>
                        </a>
                        <a href="mailto:executives@codingstudio.club" target="_blank">
                        <li><i className="fa fa-envelope"></i>executives@codingstudio.club</li>
                        </a>
                    </ul>
                </div>
                <div className="footer-items" >
                    <h3>Follow Us on</h3>
                    <div className="border1"></div>
                    <ul className="list">
                        <a href="https://www.instagram.com/coding.studio/" target="_blank"> 
                        <li><i className="fab fa-instagram"></i><a href="/home">Instagram</a></li>
                        </a>
                        <a href="https://discord.gg/8CwuPh3Nbv" target="_blank"> 
                        <li><i class="fab fa-discord"></i><a href="/home">Discord</a></li>
                        </a>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                Copyright &copy; coding.Studio();
            </div>
        </section>
    )
}