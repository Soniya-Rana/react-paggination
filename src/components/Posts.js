import React, { Component } from "react";

export default class Posts extends Component {
  render() {
    if (this.props.loading) {
      return <h1> Loading ... </h1>;
    }
    return (
      <ul className="list-group mb-4">
        {this.props.currentPosts.map((post) => {
          return (
            <li key={post.id} className="list-group-item">
              {post.title}
            </li>
          );
        })}
      </ul>
    );
  }
}
