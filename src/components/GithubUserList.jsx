import React, { useContext, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import GithubUserContext from "./../context/GithubUserContext";
import GithubUserItem from "./GithubUserItem";
import Loading from "./Loading";

function GithubUserList() {
  const { users, fetchUsers, loading } = useContext(GithubUserContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Row className="p-3">
          {users.map((u) => (
            <Col key={u.id} xl={2} lg={2} md={3} sm={4} xs={6}>
              <GithubUserItem user={u} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default GithubUserList;
