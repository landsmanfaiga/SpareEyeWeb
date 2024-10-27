import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {

        var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();
        var x = setInterval(function() {
                        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
        if (distance < 0) {
            clearInterval(x);
                        document.getElementById("demo").innerHTML = "EXPIRED";}
}, 1000);

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-sm navbar-light fixed-top bg-light border-bottom box-shadow">
                    <h3 id="demo" style={{ fontSize: 45, marginLeft: 100, color: "rgb(255, 90, 96)"}}></h3>
                </nav>
            </header>
            <div className="container mt-5">
                {children}
            </div>
        </div>
    )
}

export default Layout;