import React, { Component } from "react";

export default class PagginationWithNextPrev extends Component {
  state = {
    pageNumbers: [],
    flag: true,
    pNum: 0,
    disableNext: false,
    disablePrev: true,
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
          <li key="prev" className="page-item">
            <button
              disabled={this.state.disablePrev}
              onClick={() =>
                this.setState({
                  flag: !this.state.flag,
                  pNum: this.state.pNum - 1,
                  disableNext: false,
                  disablePrev: this.state.pNum > 1 ? true : false,
                })
              }
              href="!#"
              className="page-link"
            >
              Prev
            </button>
          </li>
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
          <li key="next" className="page-item">
            <button
              onClick={() =>
                this.setState({
                  flag: !this.state.flag,
                  pNum: this.state.pNum + 1,
                  disablePrev: false,
                  disableNext:
                    this.state.pNum < this.state.pageNumbers.length - 1
                      ? false
                      : true,
                })
              }
              href="!#"
              className="page-link"
              disabled={this.state.disableNext}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}
