import React, { useRef } from "react";
import ProjectsComponent from "./ProjectsComponent";
import ContactComponent from "./ContactComponent";
import TechComponent from "./TechComponent";
import StudiesComponent from "./StudiesComponent";
import { InformationComponentProps } from "@/interfaces/types";

const InformationComponent = ({
  currentComponent,
}: InformationComponentProps) => {
  return (
    <section className="information-slider">
      {currentComponent === "ProjectsComponent" ? (
        <ProjectsComponent />
      ) : currentComponent === "ContactComponent" ? (
        <ContactComponent />
      ) : currentComponent === "TechComponent" ? (
        <TechComponent />
      ) : currentComponent === "StudiesComponent" ? (
        <StudiesComponent />
      ) : null}
    </section>
  );
};

export default InformationComponent;
