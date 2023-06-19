import { Dispatch, SetStateAction } from "react";

export interface Project {
  id: number;
  name: string;
  description: string[];
  images: string[];
  technologies: string[];
  video: string | null;
  github_url: string;
  live_url: string;
}

export interface SingleProjectCardProps {
  project: Project;
  container: HTMLElement | null;
}

export interface NavbarProps {
  setCurrentComponent: Dispatch<SetStateAction<string>>;
}

export interface InformationComponentProps {
  currentComponent: string;
}