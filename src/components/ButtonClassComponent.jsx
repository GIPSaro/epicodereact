import { Component } from "react";

class ButtonClassComponent extends Component {
  render() {
    return <button>{this.props.customTitle}</button>;
  }
}
export default ButtonClassComponent;
