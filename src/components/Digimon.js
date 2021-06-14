import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardColumns, Button } from 'react-bootstrap/';

export class Digimon extends Component {
  render() {
    return (
      <div>
        <CardColumns>
          <Card style={{ width: '18rem' }} key={this.props.idx}>
            <Card.Img variant="top" src={this.props.digimon.image} />
            <Card.Body>
              <Card.Title>{this.props.digimon.name}</Card.Title>
              <Card.Text>{this.props.digimon.level}</Card.Text>
              <Button
                onClick={() => this.props.addToFav(this.props.digimon)}
                variant="primary"
              >
                Add to Fav
              </Button>
            </Card.Body>
          </Card>
        </CardColumns>
      </div>
    );
  }
}

export default Digimon;
