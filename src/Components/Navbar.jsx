import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light main-nav">
  <a className="navbar-brand nav-brand" href="/"><img src="images/Ring-logo.png" alt='' width="150px"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active nav-links">
        <a className="nav-link" href="/"><img src="https://media.istockphoto.com/id/1161593798/photo/image-of-the-flag-of-ghana-series-africa.jpg?s=612x612&w=0&k=20&c=w65Gqb53-XbMWM-uNF6fXFcO54ORFP1687STHEqWkb0=" alt='' width="80px"/>Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/"><img src="https://t3.ftcdn.net/jpg/04/20/82/00/360_F_420820011_hNNu9CiD8qb4U9srxymaQAQgmRk9zwjX.jpg" alt='' width="80px"/>Link</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <a className="nav-link" href="/">About Us</a>
    </form>
  </div>
</nav>
  );
}

export default Navbar
