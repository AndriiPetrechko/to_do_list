import React, { Component } from 'react';
import Notes from './components/Notes';
import { Container } from 'react-bootstrap';
import { withoutIndex } from './components/utils';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        "**вигуляти собаку**",
        "**сходити в магазин**",
        "**заняття у спортзалі**",
      ]
    }
  }

  onNoteDelete = indexToRemove => {
    this.setState(oldstate => {
      return {
        notes: withoutIndex(oldstate.notes, indexToRemove)
      };
    });
  };

  onNoteCreate = newNoteText => {
    this.setState(oldstate => {
      return {
        notes: [newNoteText].concat(oldstate.notes)
      };
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Notes
            notes={this.state.notes}
            onDelete={this.onNoteDelete}
            onCreate={this.onNoteCreate}
          />
        </Container>
      </div>
    )
  }
}
