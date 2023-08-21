import { Component } from "react";

class Person extends Component {
  // Define appropriate lifecycle method to show alert here
  componentDidUpdate(prevProps) {
    if (prevProps.show !== this.props.show && !this.props.show) {
      alert(`A person with ${this.props.person.email} was removed from the network`);
    }
  }

  render() {
    const { img, email } = this.props.person;
    return (
      <div className="person">
        <b onClick={()=> this.props.handleRemove(this.props.index)}>X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;

