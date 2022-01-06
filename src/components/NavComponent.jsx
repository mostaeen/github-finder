import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineFileSearch } from "react-icons/ai";

function NavComponent() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <AiOutlineFileSearch />
              githubFinder
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavComponent;
