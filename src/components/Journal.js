import React, { Component } from "react"
import NavBar from "../components/nav/Navbar"
import ApplicationViews from "../components/ApplicationViews"
import "./Journal.css"

class Journal extends Component {
    state = {
        user: false
      }
      isAuthenticated = () => localStorage.getItem("credentials") !== null

      setUser = (authObj) => {
        localStorage.setItem(
            "credentials",
            JSON.stringify(authObj)
          )
          this.setState({
            user: this.isAuthenticated()
          });
        }
        clearUser = () => {
            localStorage.clear()

            this.setState({
                user: this.isAuthenticated()
            });

        }
        componentDidMount(){
          this.setState({
            user: this.isAuthenticated()
          })
        }

  render() {
    return (
      <>
         <NavBar user={this.state.user} clearUser={this.clearUser}/>
        <ApplicationViews user={this.state.user}
                          setUser={this.setUser} />
      </>
    )
  }
}

export default Journal

