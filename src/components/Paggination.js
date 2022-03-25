import React, { Component } from "react";

export default class Paggination extends Component {
  state = {
    pageNumbers: [],
    flag: true,
    pNum: 0,
  };

  componentDidMount() {
    let tempList = [];
    for (
      let i = 1;
      i <= Math.ceil(this.props.totalPosts / this.props.postsPerPage);
      i++
    ) {
      tempList.push(i);
    }
    this.setState({
      pageNumbers: tempList,
    });
  }

  componentDidUpdate(prevProp, prevState) {
    if (
      prevState.flag !== this.state.flag ||
      prevState.pNum !== this.state.pNum
    ) {
      this.props.pagginateMethod(this.state.pNum);
    }
    if (
      prevProp.totalPosts !== this.props.totalPosts ||
      prevProp.postsPerPage !== this.props.postsPerPage
    ) {
      let tempList = [];
      for (
        let i = 1;
        i <= Math.ceil(this.props.totalPosts / this.props.postsPerPage);
        i++
      ) {
        tempList.push(i);
      }
      this.setState({
        pageNumbers: tempList,
      });
    }
  }

  render() {
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {this.state.pageNumbers.map((num) => (
            <li key={num} className="page-item">
              <a
                onClick={() =>
                  this.setState({
                    flag: !this.state.flag,
                    pNum: num,
                  })
                }
                href="!#"
                className="page-link"
              >
                {num}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
