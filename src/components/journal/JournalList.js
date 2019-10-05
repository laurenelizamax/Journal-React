import React, { Component } from 'react'
    //import the components we will need
    import JournalCard from '../journal/JournalCard'
    import JournalManager from '../../modules/JournalManager'

    class JournalList extends Component {
        //define what this component needs to render
        state = {
            entries: [],
        }
        deleteEntry = id => {
            JournalManager.delete(id)
            .then(() => {
              JournalManager.getAll()
              .then((newEntries) => {
                this.setState({
                    entries: newEntries
                })
              })
            })
          }

    componentDidMount(){
        //getAll from AnimalManager and hang on to that data; put it in state
        JournalManager.getAll()
        .then((entries) => {
            this.setState({
                entries: entries
            })
        })
    }

    render(){
        return(
            <>
            <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {this.props.history.push("/entries/new")}}>
      Add New Entry
  </button>
</section>
          <div className="container-cards">
            {this.state.entries.map(entry =>
              <JournalCard key={entry.id} 
              entry={entry} 
              deleteEntry={this.deleteEntry} 
              {...this.props}
              />
            )}
          </div>
          </>
        )
      }
    }


export default JournalList
