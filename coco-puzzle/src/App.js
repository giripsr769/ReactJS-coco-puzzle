import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      need: 0,
      break: 0, 
      templeOne: 0, templeTwo: 0, templeThree: 0
    }

    this.gameStartPond = this.gameStartPond.bind(this);
    this.gameStartBreak = this.gameStartBreak.bind(this);
    this.pondOne = this.pondOne.bind(this);
    this.pondTwo = this.pondTwo.bind(this);
    this.pondThree = this.pondThree.bind(this);
    this.breakOne = this.breakOne.bind(this);
    this.breakTwo = this.breakTwo.bind(this);
    this.breakThree = this.breakThree.bind(this);
    this.done = this.done.bind(this);
  }

  gameStartPond(e) {
    this.setState({
      need: e.target.value 
    })

  }

  gameStartBreak(e) {
    this.setState({
      break: e.target.value
    })

  }

  pondOne() {
    this.setState({
      need: this.state.need * 2
    })
  }

  breakOne() {
    this.setState({
      templeOne: this.state.need - this.state.break
    })
  }

  pondTwo() {
    this.setState({
      templeOne: this.state.templeOne * 2
    })
  }

  breakTwo() {
    this.setState({
      templeTwo: this.state.templeOne - this.state.break
    })
  }

  pondThree() {
    this.setState({
      templeTwo: this.state.templeTwo * 2
    })
  }

  breakThree() {
    this.setState({
      templeThree: this.state.templeTwo - this.state.break
    })
  }

  done() {
    if (this.state.templeThree === 0) {
      alert('GOOD Work !!!')
    
    }
    else {
      alert('Please Try Again');
      this.clear();
     
    }
  }
  clear(){
    this.setState({
      need : null,
      break : null,
      gameStartBreak: null,
      gameStartPond:null
    })
  }

  render() {

    return (
      <React.Fragment>
      <div className='bdy'>
        <header className='head'> Coco-Puzzle </header>
        <div className='rules'>
          <h3>Conditions : </h3>
          <fieldset>
            <ul>
              <li>Step 1 : Three temples are there. User have to break coconuts in each temple.</li>
              <li>Step 2 : User can select as many Coco(s) they need.</li>
              <li>Step 3 : Before breaking cocos, user must dip cocos into the pond in each temple.</li>
              <li>Step 4 : Once the coco dipped, no. of cocos get doubled.</li>
              <li>Step 5 : User can allowed to beark same no. of cocos in every temple.</li>
              <li>Step 6 : Atlast(In thrid Temple) user must break all coco they have.</li>
            </ul>
          </fieldset>
          <hr />
          <span>Coco Need  :  <input type='number' onChange={this.gameStartPond} /> </span>
          <span>Coco Break :  <input type='number' onChange={this.gameStartBreak} /> </span>
          <hr />
        </div>
        <fieldset>
          <div className='temp'>
            <h3> First Temple </h3>
            <label> Total coconut : {this.state.need} </label><br />
            <label> Breaking coconut :{this.state.break} </label><br /><p></p>
            <span className='btn'><button onClick={this.pondOne}> POND </button></span>
            <span><button onClick={this.breakOne}> BREAK </button></span>
          </div>
          <div className='temp'>
            <h3> Second Temple </h3>
            <label> Total coconut : {this.state.templeOne}</label><br />
            <label> Breaking coconut :{this.state.break} </label><br /><p></p>
            <span className='btn'><button onClick={this.pondTwo}> POND </button></span>
            <span><button onClick={this.breakTwo}> BREAK </button></span>
          </div>
          <div className='temp'>
            <h3> Third Temple </h3>
            <label> Total coconut :{this.state.templeTwo} </label><br />
            <label> Breaking coconut :{this.state.break} </label><br /><p></p>
            <span className='btn'><button onClick={this.pondThree}> POND </button></span>
            <span><button onClick={this.breakThree}> BREAK </button></span>
          </div>
          <button onClick={this.done}>Check It</button>
        </fieldset>
        <br/>
        <br/>
        <br/>
        <footer className='foot'>CopyRights @ 2018</footer>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
