import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(`Errorboundary caught an error`, error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          This Listing has an error. <Link to="/">Click here</Link> to go back
          to home page.
        </h2>
      );
    }

    return this.props.children;
  }
}
