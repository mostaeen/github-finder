import "./App.css";
import NavComponent from "./components/NavComponent";
import Footer from "./components/Footer";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { GithubUserProvider } from "./context/GithubUserContext";
import SingleUser from "./components/SingleUser";

function App() {
  return (
    <GithubUserProvider>
      <BrowserRouter>
        <NavComponent />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:login" element={<SingleUser />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </GithubUserProvider>
  );
}

export default App;
