import React from "react";
import GithubUserList from "../components/GithubUserList";
import Search from "../components/Search";

function Home() {
  return (
    <div>
      <Search />
      <GithubUserList />
    </div>
  );
}

export default Home;
