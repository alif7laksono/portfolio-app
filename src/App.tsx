import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layouts";
import Content from "./components/Content";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Content />
      </Layout>
    </Router>
  );
};

export default App;
