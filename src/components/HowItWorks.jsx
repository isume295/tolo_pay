import React from 'react';
import { styled } from 'styled-components';

export default function HowItWorks() {
  return (
    <Section>
      <h2 className="title">How it works</h2>
      <div className="steps-container">
        <div className="steps">
          <div className="steps-content">
            <div className="step">1</div>
            <div className="details">

              <h3 className="details-title">Create free account</h3>
              <p>Enter the application and create an account according to your data then verify</p>

            </div>
          </div>
          {/* <div className="line" /> */}
          <div className="steps-content">
            <div className="step color">2</div>
            <div className="details">

              <h3 className="details-title">Add new card</h3>
              <p>Add and connect your card to the apps to do your every transaction activity</p>

            </div>
          </div>
          {/* <div className="line line-2" /> */}
          <div className="steps-content">
            <div className="step color">3</div>
            <div className="details">
              <h3 className="details-title">Success</h3>
              <p>If everything was done and connected then your account is ready to use</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
gap: 3.5rem;
margin-bottom: 30px;

.title{
font-size: 38px;
font-style: normal;
font-weight: 700;
line-height: 42px;
color: #172B4D; 
}

.steps-container{
    display: flex;
    align-items: center;
}

.steps{
    display: flex;
    flex-direction: column;
    gap: 4rem;
}

.step {
display: flex;
justify-content: center;
align-items: center;
width: 65.444px;
height: 65.444px;
border-radius: 50%;
background-color: #3A87BE;
font-size: 18.707px;
font-style: normal;
font-weight: 600;
color: #fff;
}
.color {
  background-color: #3A87BE4D;
  color: #3A87BE;
}

.steps-content {
display: flex;
align-items: center;
justify-content: center;
gap: 15px;


.details{
    width: 60%;
}
.details-title {
color: #172B4D;
font-size: 18px;
font-weight: 600;
line-height: 145.5%; 
}
p{
color: rgba(92, 92, 92, 0.6);
font-size: 13.289px;
font-weight: 400;
line-height: 145.5%;
/* width: 50%; */
}
}
.line{
  position: absolute;
  width: 1px;
  height: 80px;  
  background-color: #3A87BE40;
  position: absolute;  
  /* margin-left: 113px; */
  /* margin-left: 67px; */
  margin-top: 65px;
} 
.line-2{
    margin-top: 190px;  
 
}

`;
