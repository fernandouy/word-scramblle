import "./style.scss";

const mistakes = [];
let tries = 0;

const listOfWords = [
  "flower",
  "tree",
  "dog",
  "cat",
  "house",
  "level",
  "mask",
  "common",
  "avoid",
  "cotton",
];

document.addEventListener("DOMContentLoaded", () => {
  const word = generateWord();
  const mixedWord = mixWord(word);
  showMixedWord(mixedWord);
  showInputs(word);
  checkInputs(word);
});

const generateWord = () => {
  const word = listOfWords[Math.floor(Math.random() * listOfWords.length)];
  return word;
};

const showMixedWord = (word) => {
  const wordDiv = document.querySelector(".word h2");
  wordDiv.textContent = word;
};

const mixWord = (word) => {
  const mixedWord = word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
  return mixedWord;
};

const showInputs = (word) => {
  const inputDiv = document.querySelector(".characters");
  word.split("").forEach((letter) => {
    const input = document.createElement("input");
    input.type = "text";
    input.maxLength = 1;
    input.classList.add("character-input");
    inputDiv.appendChild(input);
  });
};

const checkInputs = (word) => {
  const mistakesEl = document.querySelector("#mistakes");
  const charInputs = document.querySelectorAll(".character-input");

  charInputs.forEach((input, index) => {
    input.addEventListener("keyup", (event) => {
      const isBackspace = event.key === "Backspace";
      const isArrowLeft = event.key === "ArrowLeft";
      const isArrowRight = event.key === "ArrowRight";
      const isLetter = event.key.length;
      const isCorrect = event.key === word[index];


      if (isBackspace && input.previousElementSibling) {
        input.previousElementSibling.focus();
        input.previousElementSibling.value = "";
        input.previousElementSibling.classList.remove("correct");
        input.previousElementSibling.classList.remove("incorrect");
        return;
      }

      if (isArrowLeft || isArrowRight) {
        return;
      }
      
      if (isLetter) {
        if (isCorrect) {
          input.classList.add("correct");
          input.classList.remove("incorrect");
          input.nextElementSibling?.focus();
        } else {
          input.classList.add("incorrect");
          input.classList.remove("correct");
          if (mistakes.length < 5) {
            mistakes.push(event.key);
          } else {
            console.log("You already made 5 mistakes");
          }
          showMistakes(mistakes);
          input.value = "";
          input.focus();
        }
        tries++;
      }
    });
  });
};

function showMistakes() {
  const mistakesEl = document.querySelector("#mistakes");
  mistakesEl.textContent = `${mistakes.join(", ")}`;
}

function showTries(tries) {

}