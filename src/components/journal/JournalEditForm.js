import React, { Component } from "react"
import JournalManager from "../../modules/JournalManager"
import "./JournalForm.css"

class JournalEditForm extends Component {
    //set the initial state
    state = {
        title: "",
        content: "",
        date: "",
        concepts: "",
        mood: "",
        loadingStatus: true,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEntry = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedEntry = {
            id: this.props.match.params.entryId,
            title: this.state.title,
            content: this.state.content,
            date: this.state.date,
            concepts: this.state.concepts,
            mood: this.state.mood
        };

        JournalManager.update(editedEntry)
            .then(() => this.props.history.push("/entries"))
    }

    componentDidMount() {
        JournalManager.get(this.props.match.params.entryId)
            .then(entry=> {
                this.setState({
                    title: entry.title,
                    content: entry.content,
                    date: entry.date,
                    concepts: entry.concepts,
                    mood: entry.mood,
                    loadingStatus: false,
                });
            });
    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                        <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="title"
                                placeholder="title"
                                value={this.state.title}
                            />
                            <label htmlFor="content">Content</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="content"
                                placeholder="content"
                                value={this.state.content}
                            />
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                required
                                onChange={this.handleFieldChange}
                                id="date"
                                value={this.state.date}
                                placeholder="Date"
                            />
                            <label htmlFor="concepts">Concpets Covered</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="concepts"
                                value={this.state.concepts}
                                placeholder="Concepts"
                            />
                            <label htmlFor="mood">Mood</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="mood"
                                value={this.state.mood}
                                placeholder="Mood"
                            />
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.updateExistingEntry}
                            >Save Entry</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default JournalEditForm