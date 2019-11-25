import React, { Component } from 'react';
import './App.css';
import male from "./assets/man.png";
import female from "./assets/women.png";
import angry from "./assets/5.png";
import love from "./assets/4.png";
import sad from "./assets/3.png";
import wow from "./assets/2.png";
import smile from "./assets/1.png";
import smilecry from "./assets/0.png";
import zero from "./assets/zero.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dis: true,
      age: Number,
      weight: Number,
      height: Number,
      emotionpic: zero,
      textstatusoutrange: "",
      textstatus: "อ้วน ไม่อ้วน อ้วน ไม่อ้วน อ้วน ไม่อ้วน อ้วน!!!!!!!",
      BMIvalue: 0,
      colorbackgroundM: '',
      colorbackgroundFM: ''
    };
  }

  CalProgress = bmi => {
    let thisBMI = 0;
    if (!bmi || bmi === "None") {
      thisBMI = 0;
    } else if (bmi >= 100) {
      thisBMI = 100;
    } else {
      thisBMI = bmi;
    }
    return thisBMI * 2.5;
  }

  handleChangeage = event => {
    this.setState({ age: event.target.value })
  };

  handleChangeweight = event => {
    this.setState({ weight: event.target.value })
  };

  handleChangheight = event => {
    this.setState({ height: event.target.value })
  };

  SelectM = event => {
    if (this.state.colorbackgroundM === '') {
      this.setState({ colorbackgroundM: '#028C6A' })
    } else {
      this.setState({ colorbackgroundM: '' })
    }
  }

  SelectFM = event => {
    if (this.state.colorbackgroundFM === '') {
      this.setState({ colorbackgroundFM: 'palevioletred' })
    } else {
      this.setState({ colorbackgroundFM: '' })
    }
  }

  handleSubmit = event => {
    this.setState({ dis: false })
    console.log(this.state.age);
    console.log(this.state.weight);
    console.log(this.state.height);
    var bmi = ((this.state.weight / this.state.height) / this.state.height).toFixed(1);
    console.log(bmi);
    if (this.state.age < 20) {
      this.setState({ textstatusoutrange: '(BMI) คือ อัตราส่วนระหว่างน้ำหนักต่อส่วนสูง ที่ใช้บ่งว่าอ้วนหรือผอม ในผู้ใหญ่ตั้งแต่อายุ 20 ปีขึ้นไป' })
      if (bmi < 18.5) {
        this.setState({ emotionpic: sad })
        this.setState({ textstatus: 'น้อยกว่า 18.5: น้ำหนักน้อยเกินไป ซึ่งอาจจะเกิดจากนักกีฬาที่ออกกำลังกายมาก และได้รับสารอาหารไม่เพียงพอ วิธีแก้ไขต้องรับประทานอาหารที่มีคุณภาพ และมีปริมาณพลังงานเพียงพอ และออกกำลังกายอย่างเหมาะสม' })
      }
      if (bmi >= 18.5 && bmi < 23.4) {
        this.setState({ emotionpic: love })
        this.setState({ textstatus: '18.5 - 23.4: น้ำหนักปกติ และมีปริมาณไขมันอยู่ในเกณฑ์ปกติ มักจะไม่ค่อยมีโรคร้าย อุบัติการณ์ของโรคเบาหวาน ความดันโลหิตสูงต่ำกว่าผู้ที่อ้วนกว่านี้' })
      }
      if (bmi >= 23.5 && bmi < 28.4) {
        this.setState({ emotionpic: smile })
        this.setState({ textstatus: '23.5 - 28.4: น้ำหนักเกิน หากคุณมีกรรมพันธ์เป็นโรคเบาหวานหรือไขมันในเลือดสูงต้องพยายามลดน้ำหนักให้ดัชนีมวลกายต่ำกว่า 23' })
      }
      if (bmi >= 28.5 && bmi < 34.9) {
        this.setState({ emotionpic: smilecry })
        this.setState({ textstatus: '28.5 - 34.9: โรคอ้วนระดับ1 และหากคุณมีเส้นรอบเอวมากกว่า 90 ซม.(ชาย) 80 ซม.(หญิง) คุณจะมีโอกาศเกิดโรคความดัน เบาหวานสูง จำเป็นต้องควบคุมอาหาร และออกกำลังกาย' })
      }
      if (bmi >= 35.0 && bmi < 39.9) {
        this.setState({ emotionpic: wow })
        this.setState({ textstatus: '35.0 - 39.9: โรคอ้วนระดับ2 คุณเสี่ยงต่อการเกิดโรคที่มากับความอ้วน หากคุณมีเส้นรอบเอวมากกว่าเกณฑ์ปกติคุณจะเสี่ยงต่อการเกิดโรคสูง คุณต้องควบคุมอาหาร และออกกำลังกายอย่างจริงจัง' })
      }
      if (bmi >= 40) {
        this.setState({ emotionpic: angry })
        this.setState({ textstatus: '40 หรือมากกว่านี้ : โรคอ้วนขั้นสูงสุด' })
      }
    } else {
      if (bmi < 18.5) {
        this.setState({ emotionpic: sad })
        this.setState({ textstatus: 'น้อยกว่า 18.5: น้ำหนักน้อยเกินไป ซึ่งอาจจะเกิดจากนักกีฬาที่ออกกำลังกายมาก และได้รับสารอาหารไม่เพียงพอ วิธีแก้ไขต้องรับประทานอาหารที่มีคุณภาพ และมีปริมาณพลังงานเพียงพอ และออกกำลังกายอย่างเหมาะสม' })
      }
      if (bmi >= 18.5 && bmi < 23.4) {
        this.setState({ emotionpic: love })
        this.setState({ textstatus: '18.5 - 23.4: น้ำหนักปกติ และมีปริมาณไขมันอยู่ในเกณฑ์ปกติ มักจะไม่ค่อยมีโรคร้าย อุบัติการณ์ของโรคเบาหวาน ความดันโลหิตสูงต่ำกว่าผู้ที่อ้วนกว่านี้' })
      }
      if (bmi >= 23.5 && bmi < 28.4) {
        this.setState({ emotionpic: smile })
        this.setState({ textstatus: '23.5 - 28.4: น้ำหนักเกิน หากคุณมีกรรมพันธ์เป็นโรคเบาหวานหรือไขมันในเลือดสูงต้องพยายามลดน้ำหนักให้ดัชนีมวลกายต่ำกว่า 23' })
      }
      if (bmi >= 28.5 && bmi < 34.9) {
        this.setState({ emotionpic: smilecry })
        this.setState({ textstatus: '28.5 - 34.9: โรคอ้วนระดับ1 และหากคุณมีเส้นรอบเอวมากกว่า 90 ซม.(ชาย) 80 ซม.(หญิง) คุณจะมีโอกาศเกิดโรคความดัน เบาหวานสูง จำเป็นต้องควบคุมอาหาร และออกกำลังกาย' })
      }
      if (bmi >= 35.0 && bmi < 39.9) {
        this.setState({ emotionpic: wow })
        this.setState({ textstatus: '35.0 - 39.9: โรคอ้วนระดับ2 คุณเสี่ยงต่อการเกิดโรคที่มากับความอ้วน หากคุณมีเส้นรอบเอวมากกว่าเกณฑ์ปกติคุณจะเสี่ยงต่อการเกิดโรคสูง คุณต้องควบคุมอาหาร และออกกำลังกายอย่างจริงจัง' })
      }
      if (bmi >= 40) {
        this.setState({ emotionpic: angry })
        this.setState({ textstatus: '40 หรือมากกว่านี้ : โรคอ้วนขั้นสูงสุด' })
      }
    }
    this.setState({ BMIvalue: bmi })
  }

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
              <div className="box-genderm" onClick={this.SelectM} style={{backgroundColor: this.state.colorbackgroundM}}>
                <img class="gender-img" src={male}></img>
              </div>
              <div className="box-genderfm" onClick={this.SelectFM} style={{backgroundColor: this.state.colorbackgroundFM}}>
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
                <input className="input" placeholder="อายุ" onChange={this.handleChangeage} disabled={!this.state.dis} />
                <div className="circle">Year</div>
              </div>
              <br />
              <div className="label-input">
                <div className="texts">HEIGHT</div>
                <input className="input" placeholder="ส่วนสูง" onChange={this.handleChangheight} disabled={!this.state.dis} />
                <div className="circle">M</div>
              </div>
              <br />
              <div className="label-input">
                <div className="texts">WEIGHT</div>
                <input className="input" placeholder="น้ำหนัก" onChange={this.handleChangeweight} disabled={!this.state.dis} />
                <div className="circle">Kg</div>
              </div>
              <br />
              <br />
              <div className="textstatus">{this.state.textstatusoutrange}</div>
            </div>
            <br />
            <br />
            <div className="box-button">
              <div className="button" onClick={this.handleSubmit}>CALCULATE</div>
            </div>
          </div>
          <div className="right-content">
            <div className="bmi-value">
              <h1 className="value-bmi">{this.state.BMIvalue}/40</h1>
              <div>
                <div class="progress-bar">
                  <div class="value-progress-bar" style={{ width: (this.state.BMIvalue) * 2.5 >= 100 ? "100" + "%" : (this.state.BMIvalue) * 2.5 + "%" }}>
                  </div>
                </div>
              </div>
            </div>
            <div className="description">
              <img class="cute-img" src={this.state.emotionpic} alt="emotion" />
              <p>{this.state.textstatus}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
