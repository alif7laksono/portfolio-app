// App.tsx
import React from "react";
import LeftPart from "./components/LeftPart";
import RightPart from "./components/RightPart";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="flex">
      <Header />
      <LeftPart />
      <RightPart />
    </div>
  );
};

export default App;
