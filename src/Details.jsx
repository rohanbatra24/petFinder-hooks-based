import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Details extends Component {
  // a constructor always runs when an instance of the class is created
  constructor() {
    super(); //super calls the Component constructor. We always have to do this.

    this.state = { loading: true, pet: null };
  }

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );

    const json = await res.json();

    this.setState({ pet: json.pets[0], loading: false });
  }

  render() {
    if (this.state.pet && !this.state.loading) {
      const { animal, breed, city, state, description, name } = this.state.pet;

      return (
        <div className="details">
          <div>
            <h1>{name}</h1>
            <h2>
              {animal} - {breed} - {city}, {state}
            </h2>
            <button>Adopt {name}</button>
            <p>{description}</p>
          </div>
        </div>
      );
    } else {
      return <h2>Loading...</h2>;
    }
  }
}

export default withRouter(Details);
