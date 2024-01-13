import React from 'react';
import "./Services.css"

const Services = () => {
  return (
    <section className="services" id="services">
        <h2 className="heading">Our <span>Services</span></h2>

        <div className="services-container">
            <div className="services-box">
                <i class="bx bx-code-alt"></i>
                <h3>Web Development</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus eius ducimus assumenda odit consequuntur sunt a excepturi sit est tempora.</p>
                <a href="#" className="btn">Read more</a>
            </div>

            <div className="services-box">
                <i class="bx bxs-paint"></i>
                <h3>Graphic Design</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus eius ducimus assumenda odit consequuntur sunt a excepturi sit est tempora.</p>
                <a href="#" className="btn">Read more</a>
            </div>

            <div className="services-box">
                <i class="bx bx-bar-chart-alt"></i>
                <h3>Digital Marketing</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus eius ducimus assumenda odit consequuntur sunt a excepturi sit est tempora.</p>
                <a href="#" className="btn">Read more</a>
            </div>
        </div>
    </section>
  )
}

export default Services