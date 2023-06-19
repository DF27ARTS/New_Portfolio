const PersonalInformation = {
  Name: "Fernando Rojas Carrillo",
  Frontend: "Frontend",
  Backend: "Backend",
  Fullstack: "Fullstack",
};

const setLetter = (letter) => {
  console.log("letter: ", letter);
};

new Promise(async (resolve) => {
  const letters = PersonalInformation.Frontend.split("");
  for (const letter of letters) {
    await new Promise((innerResolve) => {
      setTimeout(() => {
        setLetter(letter);
        innerResolve();
      }, 1000);
    });
  }

  resolve();
})
  .then(() => {
    console.log("Success");
  })
  .catch((error) => console.log(error));
