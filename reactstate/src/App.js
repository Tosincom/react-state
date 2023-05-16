import React, { Component } from "react";
import "./App.css";
import TimeInterval from "./components/TimeInterval";

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    person: {
      fullname: "Afolabi ibukun",
      bio: "A Phenomenal Boss a great Educator And a loving mother",
      profession: "A Proprietress",
      imgSrc:
        "https://th.bing.com/th/id/R.9e1963d8a8d194a059611483f7b7904e?rik=fkiH%2b42UOEwZEg&pid=ImgRaw&r=0",

    },
    showProfile:false,
  };
  
  toggleProfile = () => {
    this.setState((prevState) => ({ showProfile: !prevState.showProfile }));
  };
  

  render() {
    const {person, showProfile}=this.state;
    return (
      <div className="App">
        <h1>About Mrs Afolabi </h1>
        <div>
          <p>{this.state.person.fullname}</p>
          {showProfile && (
            <>
            <p>{this.state.person.bio}</p>
          <p>{this.state.person.profession}</p>
          <img className="hello" src={this.state.person.imgSrc} alt="" />
            </>
          )}
          
        </div>
        <button onClick={this.toggleProfile}>Toogle button</button>
        {showProfile? "Hide profile":"show Profile"}
       <TimeInterval/>
      </div>
    );
  }
}

export default App;
