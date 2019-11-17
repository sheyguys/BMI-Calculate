import React, { Component } from 'react';
import './App.css';
import male from "./man.png";
import female from "./women.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          BMI CALCULATOR
      </header>
        <div className="content">
          <div className="left-content">
            <br />
            <br />
            <br />
            <br />
            <div className="gender">
              <div className="box-gender">
                <img class="gender-img" src={male}></img>
              </div>
              <div className="box-gender">
                <img class="gender-img" src={female}></img>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="data-content">
              <div className="label-input">
                <div className="texts">AGE</div>
                <input className="input" placeholder="อายุ"/>
                <div className="circle">Year</div>
              </div>
              <br/>
              <div className="label-input">
                <div className="texts">WEIGHT</div>
                <input className="input" placeholder="น้ำหนัก"/>
                <div className="circle">Cm</div>
              </div>
              <br/>
              <div className="label-input">
                <div className="texts">HEIGHT</div>
                <input className="input" placeholder="ส่วนสูง"/>
                <div className="circle">Kg</div>
              </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="box-button">
              <div className="button">CALCULATE</div>
            </div>
          </div>


          <div className="right-content">
            <div>Right</div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
