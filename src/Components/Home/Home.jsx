import React, { Component } from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <p className="home-title">Carrot</p>
      <div className="home-title">
        <p className="home-title">Cake</p>
        <img
          className="test-img"
          alt="Pic of one of our carrot cakes"
          src="assets/img/cake2crop.png"
        />
        <div className="side-title-wrap">
          <span className="side-title">Bar&</span>
          <span className="side-title">Grill</span>
        </div>
      </div>
      <div className="test-row" />
      <div className="profile-intro">
        <div className="line-div">
          <span className="sexy-line" />
        </div>
        <div className="profile-info">
          <h1 className="profile-info-header">A long line of Carrot Cake makers</h1>
          <p className="profile-info-paragraph">
            From our founder Alfonso Carroway IV to our current head chef Alfonso Carroway VII, the
            art of carrot cake makery has been passed down in detail. Come down to our location at
            33rd and Bob Billings and experience something you could not imagine!
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
