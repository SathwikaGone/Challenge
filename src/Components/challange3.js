import React, { Component } from "react";
import cx from "classnames";
export default class challange3 extends Component {
  state = {
    likesCount: 100,
    clicked: false,
  };

  handleClick = () => {
    if (this.state.clicked === false) {
      this.setState({ likesCount: this.state.likesCount + 1 });
    } else {
      this.setState({ likesCount: this.state.likesCount - 1 });
    }
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    const { likesCount } = this.state;
    let classN =
      this.state.clicked === true
        ? cx("liked-button", "liked")
        : cx("liked-button");
    return (
      <div>
        <button className={classN} onClick={this.handleClick}>
          Like | <span className="likes-counter">{likesCount}</span>
        </button>
      </div>
    );
  }
}
