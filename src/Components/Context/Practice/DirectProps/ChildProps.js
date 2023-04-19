import React from "react";
import { ContextThemeColor } from "./DirectContext";

class ChildProps extends React.Component {
  render() {
    let color = this.context;
    return <button style={{backgroundColor: color}}>Direct prop</button>  
  }
}

export default ChildProps;
ChildProps.contextType = ContextThemeColor;

/*return <button style={{ backgroundColor: color }}>Context Button</button>*/
