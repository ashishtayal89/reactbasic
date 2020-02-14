import { Component } from "react";

// 1 props are immutable ie only readonly fields
// export default function(props) {
//   props.name = "Harpreet";
//   return props.name;
// }

// 2 this.props is not accessible here since we have not invoked super.
// export default class UseSuper extends Component {
//   constructor(props) {
//     console.log(this.props);
//   }
// }

// 3 this.props is accessible in render since react by default set this.props to props after constructor
// export default class UseSuper extends Component {
//   constructor(props) {
//     super();
//     console.log(this.props);
//   }
//   render() {
//     return this.props.name;
//   }
// }

// 4
// export default class UseSuper extends Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props);
//   }
//   render() {
//     return this.props.name;
//   }
// }
