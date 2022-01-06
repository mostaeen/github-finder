import React, { useContext, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import GithubUserContext from "./../context/GithubUserContext";
import Loading from "./Loading";

function SingleUser() {
  const { user, fetchUser, loading } = useContext(GithubUserContext);
  const { login } = useParams();

  useEffect(() => {
    fetchUser(login);
    console.log(login);
  }, []);

  return (
    <div className="py-3">
      {loading ? (
        <Loading />
      ) : (
        <Card>
          <Row>
            <Col lg={{ span: 4, offset: 2 }} xl={{ span: 4, offset: 2 }}>
              <Card.Img variant="top" src={user.avatar_url} />
            </Col>
            <Col lg={4} xl={4}>
              <Card.Body>
                <Card.Title>Username: {user.login}</Card.Title>
                <Card.Text>Some quick example text.</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      )}
    </div>
  );
}

export default SingleUser;
