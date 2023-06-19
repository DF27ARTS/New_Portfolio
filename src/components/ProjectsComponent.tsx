import { Project } from "@/interfaces/types";
import React, { useEffect, useRef, useState } from "react";
import { SingleProjectCard } from "./SingleProjectCard";

const ProjectsComponent = () => {
  const [Projects, setProjects] = useState<Project[] | null>(null);
  const containerInfoRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/projects", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section ref={containerInfoRef} className="projects-container">
      {Projects?.map((project: Project) => (
        <SingleProjectCard
          project={project}
          container={containerInfoRef.current}
        />
      ))}
    </section>
  );
};

export default ProjectsComponent;
