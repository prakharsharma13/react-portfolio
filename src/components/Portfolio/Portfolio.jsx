import React from "react";
import "./Portfolio.css";
import portfolio1 from "../../assets/portfolio1.jpg";
import portfolio2 from "../../assets/portfolio2.jpg";
import portfolio3 from "../../assets/portfolio3.jpg";
import portfolio4 from "../../assets/portfolio4.jpg";
import portfolio5 from "../../assets/portfolio5.jpg";
import portfolio6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Project</span>
      </h2>

      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={portfolio1} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              itaque.
            </p>
            <a href="#">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={portfolio2} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              itaque.
            </p>
            <a href="#">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={portfolio3} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              itaque.
            </p>
            <a href="#">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={portfolio4} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              itaque.
            </p>
            <a href="#">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={portfolio5} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              itaque.
            </p>
            <a href="#">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={portfolio6} alt="" />
          <div className="portfolio-layer">
            <h4>Web Design</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              itaque.
            </p>
            <a href="#">
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
