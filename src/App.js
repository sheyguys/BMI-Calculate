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
import asia from "./assets/asia-map.png";
import europe from "./assets/europe-map.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dis: true,
      age: '',
      weight: '',
      height: '',
      BMIvalue: 0,
      emotionpic: zero,
      textstatusoutrange: '',
      colorbackgroundM: '',
      colorbackgroundFM: '',
      colorbackgroundAsia: '',
      colorbackgroundEurope: '',
      displaystatus: 'none'
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

  SelectMale = event => {
    if (this.state.colorbackgroundM === '') {
      this.setState({ colorbackgroundM: '#87CEEB' })
      this.setState({ colorbackgroundFM: '' })
    } else {
      this.setState({ colorbackgroundM: '' })
    }
  }

  SelectFeMale = event => {
    if (this.state.colorbackgroundFM === '') {
      this.setState({ colorbackgroundFM: 'palevioletred' })
      this.setState({ colorbackgroundM: '' })
    } else {
      this.setState({ colorbackgroundFM: '' })
    }
  }

  SelectAsia = event => {
    if (this.state.colorbackgroundAsia === '') {
      this.setState({ colorbackgroundAsia: '#ABD732' })
      this.setState({ colorbackgroundEurope: '' })
    } else {
      this.setState({ colorbackgroundAsia: '' })
    }
  }

  SelectEurope = event => {
    if (this.state.colorbackgroundEurope === '') {
      this.setState({ colorbackgroundEurope: '#ABD732' })
      this.setState({ colorbackgroundAsia: '' })
    } else {
      this.setState({ colorbackgroundEurope: '' })
    }
  }

  handleReset = event => {
    document.getElementById('age').value = ''
    document.getElementById('height').value = ''
    document.getElementById('weight').value = ''
    this.setState({ age: '' })
    this.setState({ weight: '' })
    this.setState({ height: '' })
    this.setState({ colorbackgroundFM: '' })
    this.setState({ colorbackgroundM: '' })
    this.setState({ colorbackgroundEurope: '' })
    this.setState({ colorbackgroundAsia: '' })
    this.setState({ dis: true })
  }

  handleSubmit = event => {
    var bmi = ((this.state.weight / this.state.height) / this.state.height).toFixed(1);
    if (this.state.colorbackgroundAsia === '' && this.state.colorbackgroundEurope === '') {
      this.setState({ textstatusoutrange: 'Please select Continent!' })
    } else if (this.state.colorbackgroundM === '' && this.state.colorbackgroundFM === '') {
      this.setState({ textstatusoutrange: 'Please select Gender!' })
    } else if (this.state.age == 0) {
      this.setState({ textstatusoutrange: 'Please complete Age!!!' })
    } else if (this.state.age < 20) {
      this.setState({ textstatusoutrange: '(BMI) คือ อัตราส่วนระหว่างน้ำหนักต่อส่วนสูง ที่ใช้บ่งว่าอ้วนหรือผอม ในผู้ใหญ่ตั้งแต่อายุ 20 ปีขึ้นไป' })
    } else if (this.state.height == 0) {
      this.setState({ textstatusoutrange: 'Please complete Height!!!' })
    } else if (this.state.weight == 0) {
      this.setState({ textstatusoutrange: 'Please complete Weight!!!' })
    } else if (this.state.colorbackgroundAsia !== '') {
        if (bmi < 18.5) {
          this.setState({ dis: false })
          this.setState({ displaystatus: "flex" });
          this.setState({ emotionpic: sad })
          this.setState({ textstatus: 'น้อยกว่า 18.5: น้ำหนักน้อยเกินไป ซึ่งอาจจะเกิดจากนักกีฬาที่ออกกำลังกายมาก และได้รับสารอาหารไม่เพียงพอ วิธีแก้ไขต้องรับประทานอาหารที่มีคุณภาพ และมีปริมาณพลังงานเพียงพอ และออกกำลังกายอย่างเหมาะสม' })
        }
        if (bmi >= 18.5 && bmi < 23.4) {
          this.setState({ dis: false })
          this.setState({ displaystatus: "flex" });
          this.setState({ emotionpic: love })
          this.setState({ textstatus: '18.5 - 23.4: น้ำหนักปกติ และมีปริมาณไขมันอยู่ในเกณฑ์ปกติ มักจะไม่ค่อยมีโรคร้าย อุบัติการณ์ของโรคเบาหวาน ความดันโลหิตสูงต่ำกว่าผู้ที่อ้วนกว่านี้' })
        }
        if (bmi >= 23.5 && bmi < 28.4) {
          this.setState({ dis: false })
          this.setState({ displaystatus: "flex" });
          this.setState({ emotionpic: smile })
          this.setState({ textstatus: '23.5 - 28.4: น้ำหนักเกิน หากคุณมีกรรมพันธ์เป็นโรคเบาหวานหรือไขมันในเลือดสูงต้องพยายามลดน้ำหนักให้ดัชนีมวลกายต่ำกว่า 23' })
        }
        if (bmi >= 28.5 && bmi < 34.9) {
          this.setState({ dis: false })
          this.setState({ displaystatus: "flex" });
          this.setState({ emotionpic: smilecry })
          this.setState({ textstatus: '28.5 - 34.9: โรคอ้วนระดับ1 และหากคุณมีเส้นรอบเอวมากกว่า 90 ซม.(ชาย) 80 ซม.(หญิง) คุณจะมีโอกาศเกิดโรคความดัน เบาหวานสูง จำเป็นต้องควบคุมอาหาร และออกกำลังกาย' })
        }
        if (bmi >= 35.0 && bmi < 39.9) {
          this.setState({ dis: false })
          this.setState({ displaystatus: "flex" });
          this.setState({ emotionpic: wow })
          this.setState({ textstatus: '35.0 - 39.9: โรคอ้วนระดับ2 คุณเสี่ยงต่อการเกิดโรคที่มากับความอ้วน หากคุณมีเส้นรอบเอวมากกว่าเกณฑ์ปกติคุณจะเสี่ยงต่อการเกิดโรคสูง คุณต้องควบคุมอาหาร และออกกำลังกายอย่างจริงจัง' })
        }
        if (bmi >= 40) {
          this.setState({ dis: false })
          this.setState({ displaystatus: "flex" });
          this.setState({ emotionpic: angry })
          this.setState({ textstatus: '40 หรือมากกว่านี้ : โรคอ้วนขั้นสูงสุด' })
        }
    } else if (this.state.colorbackgroundEurope !== '') {
        if (bmi < 18.5) {
          this.setState({ dis: false })
          this.setState({ displaystatus: "flex" });
          this.setState({ textstatus: 'Under weight' })
        }
        if (bmi >= 18.5 && bmi < 24.9) {
          this.setState({ dis: false })
          this.setState({ displaystatus: "flex" });
          this.setState({ textstatus: 'Normal weight' })
        }
        if (bmi >= 25 && bmi < 29.9) {
          this.setState({ dis: false })
          this.setState({ displaystatus: "flex" });
          this.setState({ textstatus: 'Overweight' })
        }
        if (bmi >= 30) {
          this.setState({ dis: false })
          this.setState({ displaystatus: "flex" });
          this.setState({ textstatus: 'Obesity' })
        }
      }
    this.setState({ BMIvalue: bmi })
  }

  closedisplay = event => {
    console.log("click")
    var modal = document.getElementById("modal");
    if (event.target !== modal) {
      this.setState({ displaystatus: "none" });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="content">
          <div className="layout-content">
            <div className="box-content">
              <div className="box">
                <header className="App-header">BMI CALCULATOR</header>
                <div className="continent">
                  <div className="box-continent" onClick={this.SelectAsia} style={{ backgroundColor: this.state.colorbackgroundAsia }}>
                    <img class="map-img" src={asia}></img>
                  </div>
                  <div className="box-continent" onClick={this.SelectEurope} style={{ backgroundColor: this.state.colorbackgroundEurope }}>
                    <img class="map-img" src={europe}></img>
                  </div>
                </div>
                <div className="gender">
                  <div className="box-gender" onClick={this.SelectMale} style={{ backgroundColor: this.state.colorbackgroundM }}>
                    <img class="gender-img" src={male}></img>
                  </div>
                  <div className="box-gender" onClick={this.SelectFeMale} style={{ backgroundColor: this.state.colorbackgroundFM }}>
                    <img class="gender-img" src={female}></img>
                  </div>
                </div>
                <div className="data-content">
                  <div className="label-input">
                    <input className="input" id="age" placeholder="อายุ ( ปี ) / Age ( Years )" onChange={this.handleChangeage} disabled={!this.state.dis} />
                  </div>
                  <div className="label-input">
                    <input className="input" id="height" placeholder="ส่วนสูง ( ม. ) / Height ( m. )" onChange={this.handleChangheight} disabled={!this.state.dis} />
                  </div>
                  <div className="label-input">
                    <input className="input" id="weight" placeholder="น้ำหนัก ( กก. ) / Height ( kg. )" onChange={this.handleChangeweight} disabled={!this.state.dis} />
                  </div>
                  <div className="textstatus">{this.state.textstatusoutrange}</div>
                </div>
                <div className="box-button">
                  <div className="buttonsubmit" onClick={this.handleSubmit}>CALCULATE</div>
                </div>
                <div className="box-button">
                  <div className="buttonreset" onClick={this.handleReset}>RESET</div>
                </div>
              </div>
            </div>
          </div>
          <div className="layout-Modol" id="overray" onClick={event => this.closedisplay(event)} style={{ display: this.state.displaystatus }}>
            <div className="Modal" id="modal" style={{ display: this.state.displaystatus }}>
              <h1>{this.state.BMIvalue}</h1>
              <h2>{this.state.textstatus}</h2>
            </div>
          </div>
          {/* <div className="right-content">
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
          </div> */}
        </div>
      </div>
    );
  }
}
export default App;
