// LeftPart.tsx
import React from "react";

const LeftPart: React.FC = () => {
  return (
    <div className="w-1/3">
      <div>
        <span className="text-xl font-bold">Your Logo</span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div>
        <p>Created by Alif Laksono</p>
      </div>
    </div>
  );
};

export default LeftPart;
