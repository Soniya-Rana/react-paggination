import React, { Component } from "react";
import Axios from "axios";
import Posts from "./components/Posts";
// import Paggination from "./components/Paggination";
// import PagginationWithNextPrev from "./components/PagginationWithNextPrev";
import PagginationNextPrev from "./components/PagginationNextPrev";

export default class App extends Component {
  state = {
    posts: [],
    loading: false,
    currentPage: 1,
    postsPerPage: 10,
  };

  pagginateMethod = (num) =>
    this.setState({
      currentPage: num,
    });

  componentDidMount() {
    const fetchPosts = async () => {
      this.setState({ loading: true });
      const res = await Axios.get("https://jsonplaceholder.typicode.com/posts");
      this.setState({
        posts: res.data,
        loading: false,
      });
    };

    fetchPosts();
  }

  render() {
    const indexOfLastPage = this.state.currentPage * this.state.postsPerPage;

    const indexOfFirstPage = indexOfLastPage - this.state.postsPerPage;

    const currentPosts = this.state.posts.slice(
      indexOfFirstPage,
      indexOfLastPage
    );

    return (
      <div className="container mt-5">
        <h1 className="text-primary mb-3"> Blog</h1>
        <Posts loading={this.state.loading} currentPosts={currentPosts} />
        {/* <Paggination
          postsPerPage={this.state.postsPerPage}
          totalPosts={this.state.posts.length}
          pagginateMethod={this.pagginateMethod}
        /> */}
        <PagginationNextPrev
          postsPerPage={this.state.postsPerPage}
          totalPosts={this.state.posts.length}
          pagginateMethod={this.pagginateMethod}
        />
      </div>
    );
  }
}
