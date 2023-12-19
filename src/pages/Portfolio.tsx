import React, { useState } from "react";
import portfolioData, { PortfolioItem } from "../data/portfolio";
import "./portfolio.css";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    ...new Set(portfolioData.map((item) => item.category)),
  ];

  const filteredData =
    selectedCategory === "all"
      ? portfolioData
      : portfolioData.filter(
          (portfolio) => portfolio.category === selectedCategory
        );

  return (
    <div className="portfolio-container">
      <h1 className="main-portfolio-title">Portfolio</h1>
      <div className="portfolio-nav">
        <h1 className="portfolio-title">Creative Portfolio</h1>
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "active" : ""}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="portfolio-items">
        {filteredData.map((portfolio: PortfolioItem) => (
          <div key={portfolio.id} className="portfolio-item">
            <img
              src={portfolio.imgUrl}
              alt={portfolio.title}
              className="portfolio-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
