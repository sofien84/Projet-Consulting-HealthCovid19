import React from "react";
import { Jumbotron, Container } from "reactstrap";
import './Home.css';

const Home = () => {
  return (
    <div className="HomeContainer">
      <Jumbotron fluid>
        <Container fluid className="p-3">
          <h1 className="display-3">Welcome HealthCOVID-19 App</h1>
          <h2 className="display-3">Online consultation Healthcare</h2>
          <h3 className="lead"> Welcome HealthCOVID-19 SITEWEB lets you talk to a Doctor on your website. It’s a whole new way to manage your health – using the one thing you always have with you, your phone. Skip the waiting rooms, forget the unnecessary bills, and stop scaring yourself into oblivion with internet searches.
          All you have to contact website, and you can talk to a qualified medical doctor, right from your phone or pc. Our doctors are available to you anytime, anywhere, 24/7. You request the call, and we’ll respond within an hour. </h3>
          <h2 className="lead"> TALK TO A DOCTOR </h2>
          
          <iframe title= 'video' src= "https://www.youtube.com/embed/NzPpWTMxPpI" width="560" height="315" /><br />
          <h3 className="lead"> Around the world, COVID-19 continues to have an impact across both the healthcare system and daily life.  Our global community is dealing with severe and evolving challenges, like procedure cancellations, specialist office closures, and stay-at-home orders. This uncertainty highlights the healthcare industry’s need for preparedness measures and the ability to adjust to the impacts of emerging health threats. Each of our clients faces unique challenges while they protect their employees and ensure the continuity of operations. Our healthcare consulting experts are partnering with them to navigate this crisis and mitigate disruption to their businesses. </h3>
          <img src="https://www.healio.com/~/media/slack-news/stock-images/infectious-disease/c/coviddata2_-339582778.jpeg" alt="Buy a Subscription"  style={{width:'100%',height:'auto' }}/><br />
          <img src="http://www.santetunisie.rns.tn/images/evax-bann.png" alt="Buy a Subscription"  style={{width:'100%',height:'auto' }}/><br />
        </Container>
      </Jumbotron>
    </div>
  );
};
export default Home;
