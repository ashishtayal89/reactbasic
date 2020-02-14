import React, { Component } from "react";

// Rule of thumb
// 1. Multiple setStates are batched to single update ie only 1 re-render irrespective of how many setState.
// 2. setState is asynchronous ie although all the setState happen but in an asynchronous manner.
// 3. State updates are merged.

// Rules
// 1. Do Not Modify State Directly
// 2. State Updates May Be Asynchronous
// 2.1 React may batch multiple setState() calls into a single update for performance.
// 2.2 Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.
// 3. State Updates are Merged

// 1 In-Correct
// export default class StateUpdate extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { counter: 1 };
//   }
//   updateCounter = () => {
//     this.setState({ counter: this.state.counter + 1 });
//     this.setState({ counter: this.state.counter + 1 });
//   };
//   render() {
//     console.log("render");
//     return (
//       <>
//         <div>{this.state.counter}</div>
//         <button onClick={this.updateCounter}>Update</button>
//       </>
//     );
//   }
// }

// 2 Correct
// export default class StateUpdate extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { counter: 1 };
//   }
//   updateCounter = () => {
//     this.setState(state => {
//       return { counter: state.counter + 1 };
//     });
//     this.setState(state => {
//       return { counter: state.counter + 1 };
//     });
//   };
//   render() {
//     console.log("render");
//     return (
//       <>
//         <div>{this.state.counter}</div>
//         <button onClick={this.updateCounter}>Update</button>
//       </>
//     );
//   }
// }

// 3 Child and Parent Update
// export default class Parent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { parentCounter: 1 };
//   }
//   updateCounter = () => {
//     this.setState(state => {
//       return { parentCounter: state.parentCounter + 1 };
//     });
//   };
//   render() {
//     console.log("render Parent");
//     return (
//       <>
//         <div>Parent : {this.state.parentCounter}</div>
//         <Child
//           parentCounter={this.state.parentCounter}
//           updateCounter={this.updateCounter}
//         />
//       </>
//     );
//   }
// }

// class Child extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { childCounter: 1 };
//   }
//   updateCounter = () => {
//     this.setState(state => {
//       return { childCounter: state.childCounter + 1 };
//     });
//     this.props.updateCounter();
//   };
//   render() {
//     console.log("render Child");
//     return (
//       <>
//         <div>Parent in Child : {this.props.parentCounter}</div>
//         <div>Child :{this.state.childCounter}</div>
//         <button onClick={this.updateCounter}>Update</button>
//       </>
//     );
//   }
// }

// Callback after setState
// The second parameter to setState() is an optional callback function that will be executed once setState is completed and the component is re-rendered.
// export default class StateUpdate extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { counter: 1 };
//   }
//   updateCounter = () => {
//     this.setState(
//       state => {
//         return { counter: state.counter + 1 };
//       },
//       () => {
//         console.log(this.state);
//       }
//     );
//     this.setState(
//       state => {
//         return { counter: state.counter + 1 };
//       },
//       () => {
//         console.log(this.state);
//       }
//     );
//   };
//   render() {
//     console.log("render");
//     return (
//       <>
//         <div>{this.state.counter}</div>
//         <button onClick={this.updateCounter}>Update</button>
//       </>
//     );
//   }
// }

// SetState inside callback
// This works but with a warning that setState callbacks must be pure ie without any sideeffects. Here also setState update is batched.
export default class StateUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 1 };
  }
  updateCounter = () => {
    this.setState(state => {
      this.setState(state => {
        return { counter: state.counter + 1 };
      });
      return { counter: state.counter + 1 };
    });
  };
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

// Below is an example of how it can be implemented over using a function
// var state = { counter: 1 };

// function setState(update) {
//     if (typeof update === "function") {
//         setTimeout(() => { state = { ...state, ...update(state) } }, 1000);
//     } else {
//         setTimeout(() => { state = { ...state, ...update } }, 1000);
//     }
// }

// setState({ counter: state.counter + 1 });
// setState({ counter: state.counter + 1 });

// setState((state) => { return { counter: state.counter + 1 } });
// setState((state) => { return { counter: state.counter + 1 } });
