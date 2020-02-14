import React from "react";

// In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update it based on user input.
// Controlled Component : The React component that renders a form also controls what happens in that form on subsequent user input. Or the react component maintains and updates the state of the input fields in a form.
// Uncontrolled Component : The input filed maintain and update their state by themself and react has no clue of the current state of the input field. It just gets the value of the input field by refering the html element using the ref keyword.
// IMP : In React, an <input type="file" /> is always an uncontrolled component because its value can only be set by a user, and not programmatically.

// Controlled
// export default class ControlledNameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert("A name was submitted: " + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// Uncontrolled
export default class UncontorlledNameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.name = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.name.current.value);
  }
  render() {
    console.log(this.name);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.name} defaultValue="" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
