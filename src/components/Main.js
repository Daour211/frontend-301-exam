import React, { Component } from 'react';
import axios from 'axios';
import Digimon from './Digimon';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      digimonData: [],
      showDigimon: false,
      server: process.env.REACT_APP_URL,
    };
  }

  componentDidMount = async () => {
    let digimonData = await axios.get(`${this.state.server}/getDigimon`);
    // console.log(digimonData.data);
    this.setState({
      digimonData: digimonData.data,
      showDigimon: true,
    });
  };

  addToFavFun = async (digimon) => {
    console.log(digimon);

    let digimonFavData = await axios.post(
      `${this.state.server}/addDigimon`,
      digimon
    );
  };
  render() {
    return (
      <>
        <h2>Digimons</h2>
        {this.state.showDigimon &&
          this.state.digimonData.map((digimon, idx) => {
            return (
              <Digimon
                digimon={digimon}
                idx={idx}
                addToFav={this.addToFavFun}
              />
            );
          })}
      </>
    );
  }
}

export default Main;
