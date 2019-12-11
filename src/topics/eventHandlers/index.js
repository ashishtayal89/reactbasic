import React, { PureComponent } from "react";

// 1
export default class EventHandler extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };
    this.updateCounter = this.updateCounter.bind(this);
  }
  updateCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    console.log("render");
    return (
      <>
        <div>{this.state.counter}</div>
        <button onClick={this.updateCounter}>Update</button>
      </>
    );
  }
}

// 2
// export default class EventHandler extends PureComponent {
//     constructor(props) {
//         super(props);
//         this.state = { counter: 1 };
//     }
//     updateCounter = () => {
//         this.setState({ counter: this.state.counter + 1 });
//     };
//     render() {
//         console.log("render");
//         return (
//             <>
//                 <div>{this.state.counter}</div>
//                 <button onClick={this.updateCounter}>Update</button>
//             </>
//         );
//     }
// }

// 3
// The problem with this syntax is that a different callback is created each time the EventHandler renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering.
// Moreover it occupies more memory also.
// export default class EventHandler extends PureComponent {
//     constructor(props) {
//         super(props);
//         this.state = { counter: 1 };
//     }
//     updateCounter = () => {
//         this.setState({ counter: this.state.counter + 1 });
//     };
//     render() {
//         console.log("render");
//         return (
//             <>
//                 <div>{this.state.counter}</div>
//                 <button onClick={()=>this.updateCounter}>Update</button>
//             </>
//         );
//     }
// }

// Getting event object in event handler as second object. Both the below examples are equivalent
// <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
