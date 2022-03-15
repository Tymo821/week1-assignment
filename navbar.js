import React from 'react';

export default class Navbar extends React.Component{
    render() {
      return (
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Online Store</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home</a>
      <a class="nav-item nav-link" href="#">Products</a>
      <a class="nav-item nav-link" href="#">Shopping cart</a>
      <a class="nav-item nav-link" href="#">Contact Us</a>
    </div>
  </div>
</nav>
      )
    }
};