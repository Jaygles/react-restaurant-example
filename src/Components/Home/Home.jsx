import React, { Component } from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <p className="home-title">Carrot</p>
      <p className="home-title">
        Cake
        <img
          className="test-img"
          alt="Pic of one of our carrot cakes"
          src="assets/img/cake2crop.png"
        />
        <div className="side-title-wrap">
          <span className="side-title">Bar&</span>
          <span className="side-title">Grill</span>
        </div>
      </p>
      <div className="test-row" />
      <div className="profile-row">
        <img className="profile-img" alt="Our head chef" src="assets/img/chef.jpg" />
        <div className="profile-info">
          <h2>We come from a long line of Carrot Cake makers</h2>
          <p>
            From our founder Alfonso Carroway IV to our current head chef Alfonso Carrow VII, the
            art of carrot cake makery has been passed down in detail. Come down to our location at
            33rd and Bob Billings and experience something you couldn't imagine!
          </p>
        </div>
      </div>
      <div className="img-row">
        <img className="home-img" alt="Pic of one of our carrot cakes" src="assets/img/cake1.jpg" />
        <img className="home-img" alt="Pic of one of our carrot cakes" src="assets/img/cake6.jpg" />
      </div>
      <div className="img-row">
        <img className="home-img" alt="Pic of one of our carrot cakes" src="assets/img/cake3.jpg" />
        <img className="home-img" alt="Pic of one of our carrot cakes" src="assets/img/cake4.jpg" />
      </div>
    </div>
  );
}

export default Home;
