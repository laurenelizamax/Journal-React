import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { firstLetterCase } from '../../modules/helpers'


class JournalCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
                    </picture>
                    <h3>Content: <span className="card-entryname">{this.props.entry.name}</span></h3>
                    <p>Date: {this.props.entry.date}</p>
                    <p>Concepts: {this.props.entry.concepts}</p>
                    <p>Mood: {this.props.entry.mood}</p>
                    <Link to={`/entries/${this.props.entry.id}`}><button>Details</button></Link>
                    <button type="button"
                        onClick={() => { this.props.history.push(`/entries/${this.props.entry.id}/edit`) }}>Edit</button>
                    <button type="button" onClick={() => this.props.deleteEntry(this.props.entry.id)}>Delete Entry</button>
                </div>
            </div>
        );
    }
}

export default JournalCard;