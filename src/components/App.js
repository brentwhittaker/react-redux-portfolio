import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Title from "./Title";
import profile from "../assets/profile.png";

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <img src={profile} alt="profile" className="profile" />
        <h1>Kon'nichiwa!</h1>
        <p>My name is Majinbruu.</p>
        <Title />
        {this.state.displayBio ? (
          <div>
            <p>I live in Cape Town, and code every day.</p>
            <p>My favourite language is JavaScript and C#</p>
            <p>Other than coding, I also love partying!!</p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
