import React from 'react'
import './App.css';

class App extends React.Component {
  render(){
     return (
       
    <div className="App">
      <div id="white">
        <h4 id="white-h4">Join our community</h4>
        <h5 id="white-h5">30-day, hassle-free money back guarantee</h5>
        <p id="white-p">Gain access to our amazing classes and tutorials</p>
        <p id="white-p">Perfect for programmers looking to hone their skills</p>
      </div>
      <div id="single">
        <br></br>
        <h4 id="single-h4">Monthly Subscription</h4>
        <h2 id="h2-money">£10 per month</h2> 

        <p>Full access is less than £1 per day!</p>
        <br></br>
      <button>Sign up</button>
      </div>
      <div id="blue">
        <br></br>
        <h4>Why us?</h4>
        <p>Skilled industry experts on hand</p>
        <p>Peer code reviews</p>
        <p>Coding exercises</p>
        <p>Acess to our Github repo</p>
        <p>Community forum</p>
      </div>
      
    </div>
  );
  }
 
}

export default App;
