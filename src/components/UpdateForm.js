import React, { Component } from 'react';
import { Form } from 'react-bootstrap/';

export class UpdateForm extends Component {
  render() {
    return (
      <>
        <Form onSubmit={(e) => this.props.updateDigmonData(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Digimon Name</Form.Label>
            <Form.Control
              type="text"
              value={this.props.digimonName}
              onChange={(e) => this.props.updateDigName(e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Digimon Image</Form.Label>
            <Form.Control
              type="text"
              value={this.props.digimonImage}
              onChange={(e) => this.props.updateDigImage(e)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Digimon Level</Form.Label>
            <Form.Control
              type="text"
              value={this.props.digimonLevel}
              onChange={(e) => this.props.updateDigLevel(e)}
            />
          </Form.Group>
          <Form.Control type="submit" />
        </Form>
      </>
    );
  }
}

export default UpdateForm;
