import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function GithubUserItem({ user }) {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={user.avatar_url} />
        <Card.Body>
          <Card.Title>{user.login}</Card.Title>
          <Card.Text>Some quick example text.</Card.Text>
          <Link to={`/users/${user.login}`}>
            <Button variant="info">View More..</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GithubUserItem;
