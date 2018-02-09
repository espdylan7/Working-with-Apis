import React, { Component } from "react";
import { axios }from "axios";
import Info from "./info";
import "./App.css";
import { Overlay } from "react-overlay";
import Pics from "./picss";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      pics: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    axios
      .get("https://swapi.co/api/people/" + "")
      .then(response => response.data.results)
      .then(characters => this.setState({ characters }));
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleClick() {
    let string = this.state.searchBox;
    let searchTerm = encodeURI(string);
    axios
      .get(
        `https://pixabay.com/api/?key=7978534-df385c069f55715532eb631f5&q=${searchTerm}`
      )
      .then(response => {
        console.log("response.data: ", response.data);
        this.setState({
          pics: response.data.hits
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <input name="searchBox" onChange={this.handleChange} type="text" />
            <button name="searchBtn" type="button" onClick={this.handleClick}>
              Search
            </button>
            <h1 className="text-white" id="text-animation">
              {" "}
              Characters{" "}
            </h1>
            <hr className="bg-info" id="hr-tag" />
            {this.state.characters.map(character => (
              <Info
                key={character.id}
                name={character.name}
                height={character.height}
                mass={character.mass}
                hair={character.hair_color}
                eye={character.eye_color}
                birth={character.birth_year}
                gender={character.gender}
              />
            ))}
          </div>
          <div className="col">
          {this.state.pics.map((pic, index) => (
            <Pics key={index} image={pic.webformatURL} />
          ))}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
