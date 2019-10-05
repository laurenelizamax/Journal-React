import React, { Component } from 'react';
import JournalManager from '../../modules/JournalManager'
import './JournalForm.css'

class JournalForm extends Component {
    state = {
        content: "",
        date: "",
        concepts: "",
        mood: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewEntry = evt => {
        evt.preventDefault();
        if (this.state.content === "" || this.state.date === "" || this.state.concepts === "" || this.state.mood === "") {
            window.alert("Please enter content, date, concepts, and mood!");
        } else {
            this.setState({ loadingStatus: true });
            const entry = {
                content: this.state.content,
                date: this.state.date,
                concepts: this.state.concepts,
                mood: this.state.mood
            };

            // Create the animal and redirect user to animal list
           JournalManager.post(entry)
            .then(() => this.props.history.push("/entries"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                    <label htmlFor="content">Content</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="content"
                        placeholder="Content"
                        />
                    <label htmlFor="date">Date</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="date"
                        placeholder="Date"
                        />
               <label htmlFor="concepts">Concpets Covered</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="concepts"
                        placeholder="Concepts"
                        />
                    <label htmlFor="mood">Mood</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="mood"
                        placeholder="Mood"
                        />
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewEntry}
                        >Add Entry</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}


export default JournalForm