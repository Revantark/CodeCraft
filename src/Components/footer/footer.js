import './footer.css'
import React from 'react'
export default function Footer(){
    return(
        <section className="footer">
            <div className="inner-footer">
                <div className="footer-items">
                    <h1>coding.Studio();</h1>
                    <i class="fas fa-code"></i>
                    <p>Programming Club - VBIT</p>
                    
                </div>
                <div className="footer-items">
                    <h3>Quick Links</h3>
                    <div className="border1"></div>
                    <ul className="list">
                        <a href="/home"><li>Home</li></a>
                        <a href="/home"><li>Contact us</li></a>
                        <a href="/home"><li>About us</li></a>
                    </ul>
                </div>
                <div className="footer-items">
                    <h3>Contact Us</h3>
                    <div className="border1"></div>
                    <ul className="list">
                        <li><i className="fa fa-map-marker"></i>VBIT,Hyderabad</li>
                        <li><i className="fa fa-phone"></i>1234567890</li>
                        <li ><i className="fa fa-envelope"></i>executives@codingstudio.club</li>
                    </ul>
                </div>
                <div className="footer-items" >
                    <h3>Follow Us on</h3>
                    <div className="border1"></div>
                    <ul className="list">
                        <li><i className="fab fa-facebook"></i><a href="/home">Facebook</a></li>
                        <li><i className="fab fa-instagram"></i><a href="/home">Instagram</a></li>
                        <li><i className="fab fa-twitter"></i><a href="/home">Twitter</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                Copyright &copy; coding.Studio();
            </div>
        </section>
    )
}