import React from "react";

const AboutSection = () => {
  const aboutSection: string[] = [
    `Hey there! I'm Fernando Rojas, a passionate Fullstack developer who loves building awesome web applications from scratch.`,
    `My journey as a developer started with tinkering around with HTML and CSS, and since then, I've dived headfirst into the world of JavaScript, frameworks like React and Next.js, as well as server-side technologies like Node.js and Python. I thrive on problem-solving and enjoy tackling complex challenges to deliver efficient and scalable solutions.`,
    `So, if you're looking to bring your ideas to life and create impactful web applications, let's collaborate and make something amazing together!`,
  ];

  return (
    <section className="about-section">
      {aboutSection.map((paragraph: string, index: number) => {
        const delay = aboutSection.reduce(
          (acc: any, paragraph: any, currentIndex) => {
            if (aboutSection[index - 1] && currentIndex < index) {
              return acc + paragraph.split(" ").length;
            } else {
              return acc;
            }
          },
          0
        );

        const styles = {
          "--word-animation-delay": `${delay * 50}ms`,
        } as React.CSSProperties;

        return (
          <span style={styles} key={index} className="about-section-paragraph">
            {paragraph.split(" ").map((word: string, index: number) => (
              <div key={index} className="about-section-word">
                {word}
              </div>
            ))}
          </span>
        );
      })}
    </section>
  );
};

export default AboutSection;
