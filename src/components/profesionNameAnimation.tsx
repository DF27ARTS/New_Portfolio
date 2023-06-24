import { useCallback, useEffect, useRef, useState } from "react";

// interface Information {
//   Name: string;
//   Frontend: string;
//   Backend: string;
//   Fullstack: string;
// }

const ProfesionNameAnimation = () => {
  const personalName = "Fernando Rojas Carrillo";
  const PersonalInformation: string[] = [
    "Frontend",
    "Backend",
    "Fullstack developer",
  ];

  const profesionNames = useCallback(async (node: HTMLHeadingElement) => {
    if (node) {
      if (node.hasChildNodes()) {
        const childNodes = node.querySelectorAll(".profesion-single-letter");
        if (childNodes.length)
          childNodes.forEach((child) => node.removeChild(child));
      }

      const delay = 80;

      const removeLetters = async (arrayAmount: number) => {
        return new Promise(async (resolve) => {
          for (let i = 0; i < arrayAmount; i++) {
            await new Promise((innerResolve) => {
              setTimeout(() => {
                const lastClild = document.querySelector(
                  ".profesion-single-letter:last-child"
                );
                if (lastClild) {
                  node.removeChild(lastClild);
                  innerResolve(true);
                }
              }, delay);
            });
          }

          resolve(true);
        });
      };

      const setLetter = async (
        letter: string,
        array: string[] | null = null
      ) => {
        const div = document.createElement("div");
        div.textContent = letter;
        div.className = "profesion-single-letter";
        node.appendChild(div);

        if (array) {
          return new Promise(async (innerResolve) => {
            setTimeout(async () => {
              await removeLetters(array.length);
              innerResolve(true);
            }, delay * 10);
          });
        }
      };

      const createNewPromise = (letters: string[], index: number) => {
        return new Promise((innerResolve) => {
          setTimeout(async () => {
            if (index < letters.length - 1) {
              setLetter(letters[index]);
            } else {
              await setLetter(letters[index], letters);
            }

            innerResolve(true);
          }, delay);
        });
      };

      await new Promise(async (resolve) => {
        setTimeout(async () => {
          for (const index in PersonalInformation) {
            await new Promise(async (resolve) => {
              const letters = PersonalInformation[index].split("");
              if (Number(index) < PersonalInformation.length - 1) {
                for (const index in letters) {
                  await createNewPromise(letters, Number(index));
                }
              } else {
                for (const index in letters) {
                  await new Promise((innerResolve) => {
                    setTimeout(() => {
                      setLetter(letters[index]);
                      innerResolve(true);
                    }, delay);
                  });
                }
              }

              resolve(true);
            });
          }

          resolve(true);
        }, 2000);
      });
      node.classList.remove("typing");
    }
  }, []);

  return (
    <div className="profesion-container">
      <h1 className="profile-name">
        {personalName.split("").map((letter, index) => (
          <div key={index} area-letter={letter} className="single-name-letter">
            {letter}
          </div>
        ))}
      </h1>
      <h2 ref={profesionNames} className="profesion-title typing"></h2>
    </div>
  );
};

export default ProfesionNameAnimation;
