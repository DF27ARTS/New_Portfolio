import React, { useCallback, useRef } from "react";
import projectImg from "../assets/images/projects-img.jpg";
import contactImg from "../assets/images/contact-img.jpg";
import techImg from "../assets/images/technology-img.png";
import studiesImg from "../assets/images/studies-img.jpg";
import { NavbarProps } from "@/interfaces/types";

const Navbar = ({ setCurrentComponent }: NavbarProps) => {
  const ProjectsBtnRef = useRef<HTMLButtonElement | null>(null);
  const ContactBtnRef = useRef<HTMLButtonElement | null>(null);
  const TechBtnRef = useRef<HTMLButtonElement | null>(null);
  const StudiesBtnRef = useRef<HTMLButtonElement | null>(null);

  const navbar = useCallback((node: HTMLElement) => {
    if (node) {
      const lazyLoad = document.querySelectorAll(".lazy-loading-img");
      lazyLoad.forEach((div: any) => {
        const img: HTMLImageElement | null = div.querySelector("img");

        const showImg = () => {
          img?.classList.add("loaded");
          div.style.animation = "none";
        };

        if (img?.complete) {
          showImg();
        } else {
          img?.addEventListener("load", () => showImg());
        }
      });

      const observer = new IntersectionObserver(
        (entries: any) => {
          entries.forEach((entry: any) => {
            node.classList.toggle(
              "isIntersecting",
              entry.boundingClientRect.y <= 20
            );
          });
        },
        {
          rootMargin: "-20px 0px",
          threshold: 1,
        }
      );

      observer.observe(node);
    }
  }, []);

  const setButton = (element: HTMLButtonElement | null = null) => {
    const currentActiveBtn = document.querySelector(".active-nav-btn");
    currentActiveBtn?.classList.remove("active-nav-btn");

    element?.classList.add("active-nav-btn");
  };

  const HandleClick = (
    element: HTMLButtonElement | null = null,
    component: string
  ) => {
    setButton(element);
    setCurrentComponent(component);
  };

  return (
    <nav ref={navbar} className="navbar">
      <button
        ref={ProjectsBtnRef}
        onClick={() => HandleClick(ProjectsBtnRef.current, "ProjectsComponent")}
        className="nav-btn projects active-nav-btn"
      >
        <div className="lazy-loading-img">
          <img src={projectImg.src} className="loaded-img" />
        </div>
        <span className="btn-name">PROJECTS</span>
      </button>

      <button
        ref={ContactBtnRef}
        onClick={() => HandleClick(ContactBtnRef.current, "ContactComponent")}
        className="nav-btn contact"
      >
        <div className="lazy-loading-img">
          <img src={contactImg.src} className="loaded-img" />
        </div>
        <span className="btn-name">CONTACT</span>
      </button>

      <button
        ref={TechBtnRef}
        onClick={() => HandleClick(TechBtnRef.current, "TechComponent")}
        className="nav-btn tech"
      >
        <div className="lazy-loading-img">
          <img src={techImg.src} className="loaded-img" />
        </div>
        <span className="btn-name">TECHNOLOGIES</span>
      </button>

      <button
        ref={StudiesBtnRef}
        onClick={() => HandleClick(StudiesBtnRef.current, "StudiesComponent")}
        className="nav-btn studies"
      >
        <div className="lazy-loading-img">
          <img src={studiesImg.src} className="loaded-img" />
        </div>
        <span className="btn-name">STUDIES</span>
      </button>
    </nav>
  );
};

export default Navbar;
