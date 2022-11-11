import Head from 'next/head'

import React from 'react'
import { Nav, Button } from 'react-bootstrap';
import Link from 'next/link'

const Header = () => {
    return (
        <>
          <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-xl">
    <Link href="/">
      <a className="navbar-brand">HRMS PORTAL</a>
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExample07XL">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/aboutus">
            <a className="nav-link">About us</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contactus">
            <a className="nav-link">contactus</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/faq">
            <a className="nav-link">Faq</a>
          </Link>
        </li>
      </ul>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <Button className="nav-link">
              Signup
          </Button>
        </li>

        
      </ul>
    </div>
  </div>
</Nav>

        </>
    )
}

export default Header;
