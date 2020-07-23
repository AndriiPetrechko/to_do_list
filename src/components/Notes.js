import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import './notes.css';

class Note extends Component {
    render() {
        return (
            <div className="note_item">
                <span className="note_delete" onClick={this.props.onDelete}> &times; </span>
                {this.props.text}
            </div>
        );
    }
}

class CreateNote extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
        };
    }

    onTextchange = (event) => {
        this.setState({
            text: event.target.value
        });
    };

    onReset = (event) => {
        this.setState({
            text: ''
        });
    }

    onSave = () => {
        this.props.onCreate(this.state.text);
        this.onReset();
    }

    render() {
        return (
            <div className="Notes_Create">
                <textarea onChange={this.onTextchange} value={this.state.text} className="input_text"> </textarea>
                <div className="notes_create_btn">
                    <Button variant="success" onClick={this.onSave}> Зберегти </Button>
                    <Button variant="secondary" onClick={this.onReset}> Видалити </Button>
                </div>
            </div>
        )
    }
}

export default class Notes extends Component {
    render() {
        return (
            <div className="Notes">
                <CreateNote onCreate={this.props.onCreate} />
                {this.props.notes.map((text, index) => (
                    <Note
                        text={text}
                        key={index}
                        onDelete={() => this.props.onDelete(index)}
                    />
                ))}
            </div>
        )
    }
}
