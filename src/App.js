
import './App.css';

import React, { Component } from 'react'
import image from './image.jpg'

export default class App extends Component {

  state={
    Person :{
    imgSrc:image ,
    fullName: " Mehdi Habib" ,
    bio: " I'm a Tunisian man" ,
    profession: " I'm a fullstack javaScript student" ,
    

  } ,
  time: 0 ,
  show: true 
  } ;



  tickHandler = ()=>{
    this.setState({time : this.state.time + 1})

    return this.state.time
  }

  componentDidMount(){
    var timer = setInterval(this.tickHandler , 100)
    this.setState({time : timer})
  }

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  

  render() {

    const displaytime = ()=>{
      if (this.state.time < 60){
        return this.state.time + ' Second(s)'
      }
  
      const SS = this.state.time % 60 ;
      const MM = ((this.state.time / 60) % 60).toFixed(0)
      const HH = (this.state.time/(60*60)).toFixed(0)
      return `${HH} h: ${MM} m: ${SS} s` ;
    }
    return (
      <div className="App">
        {this.state.show && (
<>
        <img style={{ width:"300px", height:"300px"}} src={this.state.Person.imgSrc} alt="myImage" />
        <h1>{this.state.Person.fullName}</h1>
        <h2>Bio:<span style={{color:"magenta"}}>{this.state.Person.bio}</span></h2>
        <h3>Profession:<span style={{color:"blue"}}>{this.state.Person.profession}</span></h3>
        
      </>
        )}
        <p style={{color:"red"}}>{displaytime()}</p>
        <button onClick={this.handleShowPerson}>click here</button>
        
      </div>
    )
  }
}
