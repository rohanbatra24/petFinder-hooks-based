import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";

class Details extends Component {
  // a constructor always runs when an instance of the class is created
  constructor() {
    super(); //super calls the Component constructor. We always have to do this.

    this.state = { loading: true, pet: null, modalOpen: false };
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
      const {
        animal,
        breed,
        city,
        state,
        description,
        name,
        images,
      } = this.state.pet;

      return (
        <div className="details">
          <Carousel images={images}></Carousel>
          <div>
            <h1>{name}</h1>
            <h2>
              {animal} - {breed} - {city}, {state}
            </h2>
            <button
              onClick={() =>
                this.setState({ showModal: !this.state.showModal })
              }
            >
              Adopt {name}
            </button>
            <p>{description}</p>
          </div>
          {this.state.showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button
                    onClick={() =>
                      this.setState({ showModal: !this.state.showModal })
                    }
                  >
                    Yes
                  </button>
                  <button
                    onClick={() =>
                      this.setState({ showModal: !this.state.showModal })
                    }
                  >
                    No
                  </button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      );
    } else {
      return <h2>Loading...</h2>;
    }
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter></DetailsWithRouter>
    </ErrorBoundary>
  );
}
