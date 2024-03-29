import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { firstLetterCase } from '../../modules/helpers'
import './JournalCards.css'


class JournalCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
                    </picture>
                    <h3>Title: <span>{firstLetterCase(this.props.entry.title)}</span></h3>
                    <p>Content: <span className="card-entryname">{this.props.entry.content}</span></p>
                    <p>Date: {this.props.entry.date}</p>
                    <p>Concepts: {this.props.entry.concepts}</p>
                    <p>Mood: {this.props.entry.mood}</p>
                    <Link to={`/entries/${this.props.entry.id}`}><button className="cardBtn">Details</button></Link>
                    <button type="button" className="cardBtn"
                        onClick={() => { this.props.history.push(`/entries/${this.props.entry.id}/edit`) }}>Edit</button>
                    <button type="button" className="cardBtn" onClick={() => this.props.deleteEntry(this.props.entry.id)}>Delete Entry</button>
                </div>
            </div>
        );
    }
}

export default JournalCard;