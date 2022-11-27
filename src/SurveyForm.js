import React, { Component } from 'react';
import './SurveyForm.css';
class SurveyForm extends Component {
  constructor(props) {
    super(props);
  this.state = {  }
  }
  render() { 
    return ( 
    <>
    <main className='container'>
      <h1 id="title">House Husband Survey Form</h1>
      <p id="description">The following responses will be used to determine job your overall satisfaction with your house husband. Data collected will <strong>not</strong> be shared with third parties.</p>
      <form id="survey-form">
        <fieldset>
          <label id="name-label"> Full Name: <input id="name" type="text" required placeholder="Big Bird"/></label>
          <label id="email-label"> Email: <input id="email" required type="email" placeholder="abc123@def456.com"/></label>
          <label id="number-label"> Years of Marriage: <input id="number" type="number" placeholder="0-100" min="0" max="100" pattern="[0-9]"/></label>
        </fieldset>
        <fieldset>
          <label id="Income Level" className='income'>Income Level:</label>
            <select className='incomeDD' id="dropdown">
              <option>Choose an option</option>
              <option>$50,000 or less</option>
              <option>($50,000 - $100,000)</option>
              <option>($150,000 - $200,000)</option>
              <option>($200,000 - $300,000)</option>
              <option>$300,000+</option>
            </select>
          <div>
            <label className='children' id="children">Number of Children:</label>
            <select className='childrenDD'id="dropdown">
              <option>Choose an option</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">I lost count</option>
            </select>
          </div>
        </fieldset>
        <fieldset className='ethnicity' id="Race">
          <div className='ethnicityTitle'><strong>What is your race/ethnicity?</strong></div>
          <label>
          <input type="radio" id="white" value="white" name="Race"></input>White
          </label>
          <label>
            <input type="radio" id="asian" value="asian" name="Race"></input>Asian
          </label>
          <label>
            <input id="black" type="radio" value="black" name="Race"></input>Black/African
          </label>
          <label>
            <input id="mixed" type="radio" value="mixed" name="Race"></input>Other / Mixed Race
          </label>
          <label>
            <input id="private" type="radio" value="private" name="Race"></input>Prefer not to say
          </label>
        </fieldset>
        <fieldset id="exceeds"><div className='exceedsTitle'><strong>Areas your husband exceeds your expectations:</strong></div> 
          <label>
            <input id="dishwashing" type="checkbox" value="+1 dishwashing"></input>Dishwashing
          </label>
          <label><input id="clothing" type="checkbox" value="+1 clothing"></input>Washing & Folding Clothes
          </label>
          <label><input id="food" type="checkbox" value="+1 food"></input>Food Prep
          </label>
          <label><input id="romance" type="checkbox" value="+1 Romance"></input>Romance
          </label>
          <label><input id="handyman" type="checkbox" value="+1 handyman"></input>Home Improvement
          </label>
        </fieldset>
        <fieldset id="fails">
          <div className = 'failsTitle'><strong>Areas your husband needs improvement:</strong></div>
          <label>
            <input id="dishwashing" type="checkbox" value="-1 dishwashing"></input>Dishwashing
          </label>
          <label>
            <input id="clothing" type="checkbox" value="-1 clothing"></input>Washing/Folding Clothes
          </label>
          <label><input id="food" type="checkbox" value="-1 food"></input>Food Prep
          </label>
          <label><input id="romance" type="checkbox" value="-1 Romance"></input>Romance
          </label>
          <label><input id="handyman" type="checkbox" value="-1 handyman"></input>Home Improvement
          </label>
        </fieldset>
        <fieldset>
          <textarea placeholder="Other relevant information"></textarea>
        </fieldset>
        <button id="submit" type="submit">Submit</button>
      </form>
    </main>
    </> 
    );
  }
}
 
export default SurveyForm;