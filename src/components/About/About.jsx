import React from 'react';
import "./About.css";
import aboutimg from "../../assets/about.png";

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="about-img">
            <img src={aboutimg} alt="" />
        </div>

        <div className="about-content">
            <h2 className="heading">About <span>Me</span></h2>
            <h3>Full-Stack Developer</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nobis, delectus minima, sint ad quo nihil ea ipsa dignissimos soluta iste aperiam consequuntur eos excepturi consequatur cum velit eius facere amet enim sapiente? Debitis asperiores sequi, eligendi ab optio veritatis dolores ex obcaecati vel, molestias quam?</p>
            <a href="" className="btn">Read more</a>
        </div>
    </section>
  )
}

export default About