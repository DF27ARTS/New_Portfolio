import { SingleProjectCardProps } from "@/interfaces/types";
import React, { useCallback } from "react";

export const SingleProjectCard = ({
  project,
  container,
}: SingleProjectCardProps) => {
  const singleCardRef = useCallback((node: HTMLDivElement) => {
    if (node) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          node.classList.toggle("isIntersecting", entry.isIntersecting);
        });
      });

      observer.observe(node);
    }
  }, []);

  return (
    <div ref={singleCardRef} className="single-card">
      <div className="single-card-container">
        <img
          src={project.images[0]}
          alt="project-img"
          className="single-card-img"
        />

        <div className="single-card-inf-container">
          <h2 className="single-card-title">{project.name}</h2>
          <span className="single-card-description">
            <p className="single-paragraph">{project.description[0]}</p>
          </span>
        </div>
      </div>
    </div>
  );
};
