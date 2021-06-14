import React, { Component } from 'react';
import { Card, CardColumns, Button } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';

export class FavList extends Component {
  render() {
    return (
      <CardColumns>
        <Card style={{ width: '18rem' }} key={this.props.idx}>
          <Card.Img variant="top" src={this.props.digimon.image} />
          <Card.Body>
            <Card.Title>{this.props.digimon.name}</Card.Title>
            <Card.Text>{this.props.digimon.level}</Card.Text>
            <Button
              variant="danger"
              onClick={() => this.props.deleteFav(this.props.idx)}
            >
              Delete
            </Button>
            <Button
              variant="primary"
              onClick={() => this.props.showFormFun(this.props.idx)}
            >
              Update
            </Button>
          </Card.Body>
        </Card>
      </CardColumns>
    );
  }
}

export default FavList;
