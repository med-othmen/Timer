import React  from 'react';
import './style.css';

class Convert extends React.Component {
 state = {
      Myinput:"0",
      minute:'00',
      second:'00',
      hour:'00',
    };
  
  convert= ()  => {

    if(this.state.Myinput=== '0') alert("SVP saisir un chiffre supérieur à 0")

else{
    var time= this.state.Myinput;
    this.setState({hour : Math.floor(time / 3600)}) ;
    this.setState({minute : Math.floor(time / 60) % 60 });
    this.setState({second : time % 60}) ;
}
  }

  reset = () => {
    this.setState({hour : "00"}) ;
    this.setState({minute : "00" });
    this.setState({second : "00"}) ;
    this.setState({Myinput : "00"}) ;
  }

  render() {
    return (
        
    <div className="countainer">

        <input className="input" type="text" name="title"   onChange={e => this.setState({Myinput: e.target.value})}  />
        <h1>Total seconds :{this.state.Myinput}</h1>
        <button className="button" type="button" onClick={this.convert}>Convert</button>
        <button className="button" type="button" onClick={this.reset}>Reset</button>

        <h3> Converted to : {this.state.hour}h :{this.state.minute}m :{this.state.second}s </h3>
    
      </div>
    );
  }
}

export default Convert;
