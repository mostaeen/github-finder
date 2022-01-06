import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Form, FormControl, Row } from "react-bootstrap";
import GithubUserContext from "../context/GithubUserContext";

function Search() {
  const [text, setText] = useState("");
  const { users, fetchTheUsers } = useContext(GithubUserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchTheUsers(text);
  };
  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <Container>
        <Row className="p-5">
          <Form className="d-flex" onSubmit={handleSubmit}>
            <FormControl
              type="search"
              onChange={handleText}
              placeholder="Search"
              value={text}
              className="me-2"
              aria-label="Search"
            />
            <button className="btn btn-primary">Search</button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default Search;
