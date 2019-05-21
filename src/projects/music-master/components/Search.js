import React, { Component } from "react";

class Search extends Component {
  state = { artistQuery: "" };

  updateArtistQuery = event => {
    this.setState({ artistQuery: event.target.value });
  };

  handlekeyPress = event => {
    if (event.key === "Enter") {
      this.searchArtist();
    }
  };
  searchArtist = () => {
    this.props.searchArtist(this.state.artistQuery);
  };
  render() {
    return (
      <div>
        <input
          onChange={this.updateArtistQuery}
          onKeyPress={this.handlekeyPress}
          placeholder="Search for an Artist"
        />
        <button onClick={this.searchArtist}>Search</button>
      </div>
    );
  }
}

export default Search;
