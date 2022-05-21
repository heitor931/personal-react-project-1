import React, { Component } from "react";
import "./App.scss";
import Cardlist from "./components/cardlist/Cardlist";
import SearchBox from "./components/searchBox/SearchBox";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      objects: [
        {
          name: "Yoga",
          src: "https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "Earth",
          age: 45000000000,
          skill: "Life",
          src: "https://images.unsplash.com/photo-1634176866089-b633f4aec882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZWFydGh8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          name: "Peace",
          origin: "inside",
          src: "https://images.unsplash.com/photo-1432265910742-819d660410b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "people",
          age: 34,
          src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          name: "people",
          src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        },
        {
          name: "people",
          src: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
        },
        {
          name: "people",
          src: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=399&q=80",
        },

        {
          name: "Yoga",
          src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=499&q=80",
        },
        {
          name: "earth",
          src: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        },
        {
          name: "earth",
          src: "https://images.unsplash.com/photo-1527672809634-04ed36500acd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
        {
          name: "earth",
          src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80",
        },
      ],
      filteredObjects: [],
    };
  }

  componentDidMount() {
    this.setState({filteredObjects: this.state.objects})
  }
  
  handleChange = (e) => {
    const filteredObject = this.state.objects.filter((obj) =>
      obj.name.toUpperCase().includes(e.target.value.toUpperCase())
    );
    this.setState({ filteredObjects: filteredObject });
  };

  render() {
    return (
      <div className="App">
        <h1>Everything in the universe...</h1>
        <SearchBox handleChange={this.handleChange} />
        <Cardlist data={this.state.filteredObjects} />
        <h1>Paz</h1>
      </div>
    );
  }
}

export default App;
