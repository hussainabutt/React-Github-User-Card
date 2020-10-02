import React from "react";
import "./App.css";
import Axios from "axios";
import UserCard from "./Components/Usercard";

class App extends React.Component {
  state = {
    followers: [],
    username: "",
  };

  componentDidMount() {
    // Axios.get("https://api.github.com/users/hussainabutt")
    //   .then((res) => {
    //     console.log("res: ", res);
    //     this.setState = {
    //       user: res.data,
    //     };
    //   })
    //   .catch((err) => console.log("error :", err))
    //   .then(
    //     Axios.get("https://api.github.com/users/hussainabutt/followers")
    //       .then((res) => {
    //         this.setState = { followers: res.data };
    //         console.log("follower response", res);
    //       })
    //       .catch((err) => console.log(err))
    //   );
  }
  fetchUsers = (username) => {
    console.log("fetchUsers invoked");
    Axios.get(`https://api.github.com/users/${username}/followers`)
      .then((res) => {
        this.setState({ followers: res.data });
        console.log("follower response", res);
        console.log(this.state.followers);
      })
      .catch((err) => console.log(err));
  };

  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    });
    console.log(this.state.username);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchUsers(this.state.username);
    this.setstate = {
      followers: [],
      username: "",
    };
  };
  render() {
    return (
      <div className="App">
        <h1>How cool are you?</h1>
        <h4>(on GitHub!)</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="GitHub Username"
            onChange={this.handleChange}
            type="text"
            value={this.state.query}
          />
          {this.state.followers.map((e) => (
            <UserCard props={e}></UserCard>
          ))}
          <button>Enter GitHub Username</button>
        </form>
      </div>
    );
  }
}
export default App;
