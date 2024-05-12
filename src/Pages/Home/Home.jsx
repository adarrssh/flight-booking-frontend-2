import React from "react";
import "./Home.css";
import Hero from "../../Components/Home/Hero/Hero";
import SubHeader from "../../Components/Home/SubHeader/SubHeader";
import Card from "../../Components/Home/Card/Card";
import ReviewSection from "../../Components/Home/ReviewsSection/ReviewSection";

const home = () => {
  return (
    <div className="home_page">
      <section className="hero_section">
        <Hero />
      </section>
      <section className="subHeader-section">
        <SubHeader />
      </section>
      <section className="card_section">
        <Card />
      </section>
      <section className="reviewAndStarSection">
        <ReviewSection />
      </section>
    </div>
  );
};

export default home;