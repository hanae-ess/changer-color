import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Person: {
        fullName: "Lionel Messi",
        bio: "Professional footballer widely regarded for playmaking and goal scoring.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Lionel_Messi.jpg",
        profession: "Footballer"
      },
      shows: false,
      timeSinceMount: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { Person, shows, timeSinceMount } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        <h3>Time since mount: {timeSinceMount} seconds</h3>

        {shows && (
          <div style={{ marginTop: "20px" }}>
            <img
              src={Person.imgSrc}
              alt="person"
              style={{ width: "200px", borderRadius: "10px" }}
            />
            <h2>{Person.fullName}</h2>
            <p>{Person.bio}</p>
            <h4>{Person.profession}</h4>
          </div>
        )}
      </div>
    );
  }
}

export default App;