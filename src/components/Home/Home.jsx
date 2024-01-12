import React from "react";
import "./Home.css";
import Img from "../../assets/home.png"

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me!</h3>
        <h1>Prakhar Sharma</h1>
        <h3>
          And I'm <span>Frontend developer</span>
        </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
          sapiente eaque laborum eos et soluta totam facere!
        </p>
        <div className="social-media">
            <a href="#"><i class='bx bxl-facebook'></i></a>
            <a href="#"><i class='bx bxl-twitter' ></i></a>
            <a href="#"><i class='bx bxl-instagram' ></i></a>
            <a href="#"><i class='bx bxl-linkedin' ></i></a>
        </div>
        <a href="" className="btn">Download CV</a>
      </div>

      <div className="home-img">
        <img src={Img} alt="" />
      </div>
    </section>
  );
};

export default Home;
