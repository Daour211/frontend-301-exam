import React, { Component } from 'react';
import axios from 'axios';
import FavList from './FavList';
import UpdateForm from './UpdateForm';

export class FavoriteDigimons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      digimonFavData: [],
      showFavDigimon: false,
      server: process.env.REACT_APP_URL,

      showForm: false,
      digimonName: '',
      digimonImage: '',
      digimonLevel: '',
      index: 0,
    };
  }

  componentDidMount = async () => {
    let digimonFavData = await axios.get(`${this.state.server}/getFavDigimon`);
    // console.log(digimonData.data);
    this.setState({
      digimonFavData: digimonFavData.data,
      showFavDigimon: true,
    });
  };

  deleteFav = async (index) => {
    console.log('inside delete');
    let id = this.state.digimonFavData[index]._id;

    let deletedFav = await axios.delete(`${this.state.server}/deleteFav/${id}`);
    this.setState({
      digimonFavData: deletedFav.data,
    });
  };

  showFormFun = (index) => {
    let selectedDigimon = this.state.digimonFavData[index];
    console.log(selectedDigimon);
    this.setState({
      showForm: true,
      digimonName: selectedDigimon.name,
      digimonImage: selectedDigimon.image,
      digimonLevel: selectedDigimon.level,
      index: index,
    });
  };

  updateDigName = (e) => {
    this.setState({ digimonName: e.target.value });
  };
  updateDigImage = (e) => {
    this.setState({ digimonImage: e.target.value });
  };
  updateDigLevel = (e) => {
    this.setState({ digimonLevel: e.target.value });
  };

  updateDigmonData = async (e) => {
    e.preventDefault();
    let id = this.state.digimonFavData[this.state.index]._id;

    let selectedDig = {
      name: this.state.digimonName,
      image: this.state.digimonImage,
      level: this.state.digimonLevel,
    };
    console.log(selectedDig);

    let updateData = await axios.put(
      `${this.state.server}/updateDigimon/${id}`,
      selectedDig
    );
    this.setState({
      digimonFavData: updateData.data,
    });
  };
  render() {
    return (
      <>
        <h2>Favorite Digimons</h2>
        {this.state.showForm && (
          <UpdateForm
            digimonName={this.state.digimonName}
            digimonImage={this.state.digimonImage}
            digimonLevel={this.state.digimonLevel}
            updateDigName={this.updateDigName}
            updateDigImage={this.updateDigImage}
            updateDigLevel={this.updateDigLevel}
            updateDigmonData={this.updateDigmonData}
          />
        )}

        {this.state.showFavDigimon &&
          this.state.digimonFavData.map((digimon, idx) => {
            return (
              <FavList
                digimon={digimon}
                idx={idx}
                deleteFav={this.deleteFav}
                showFormFun={this.showFormFun}
              />
            );
          })}
      </>
    );
  }
}

export default FavoriteDigimons;
