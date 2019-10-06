import React, { Component } from 'react';
import JournalManager from '../../modules/JournalManager'
import { firstLetterCase } from '../../modules/helpers'

class JournalDetail extends Component {

    state = {
        title: "",
        content: "",
        date: "",
        concepts: "",
        mood: "",
        loadingStatus: true,
    }

    handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        this.setState({ loadingStatus: true })
        JournalManager.delete(this.props.entryId)
            .then(() => this.props.history.push("/"))
    }
    componentDidMount() {
        //get(id) from AnimalManager and hang on to the data; put it into state
        JournalManager.get(this.props.entryId)
            .then((entry) => {
                this.setState({
                    title: entry.title,
                    content: entry.content,
                    date: entry.date,
                    concepts: entry.concepts,
                    mood: entry.mood,
                    loadingStatus: false
                });
            });
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <picture>
                        {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
                    </picture>
                    <h3>Title: <span>{firstLetterCase(this.state.title)}</span></h3>
                    <p>Content: <span>{firstLetterCase(this.state.content)}</span></p>
                    <p>Date: {firstLetterCase(this.state.date)}</p>
                    <p>Concepts: {firstLetterCase(this.state.concepts)}</p>
                    <p>Mood: {firstLetterCase(this.state.mood)}</p>
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
                </div>
            </div>
        );
    }
}

export default JournalDetail;