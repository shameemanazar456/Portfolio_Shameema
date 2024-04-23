import React from 'react'

function Header() {
  return (
    <div>
      <header>
      <nav className="navbar navbar-expand-lg bg-transparent text-light fs-5">
  <div className="container-fluid">
    <a className="navbar-brand text-light ms-5 fs-3" href="#">Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active text-light me-3" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light me-3" href="#Home">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light me-3  " href="#About">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light me-4" href="#Projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light me-4" href="#Footer">Contact Me</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
       </header>
    </div>
  )
}

export default Header
