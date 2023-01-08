import React from "react";
import styled from "@emotion/styled";
import List from "../components/List";
import ReactDOM from "react-dom"; import { BrowserRouter as Router
, Route } from "react-router-dom";
import Detail from "..components/ListDetails";

const WallPage = () => {
  return (
  <div>
    <h1>WallPage</h1>
    <Router className = "WallPage">
    <Route exact path="/" component={List} />
    <Route path="/:id" component={Detail} />
    </Router>
  </div>
  )
}


const StyledContainer = styled("div")`
  background-color: #121212;
`;

export default WallPage;
