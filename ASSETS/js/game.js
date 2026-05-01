const startScreen = document.querySelector("#startScreen");
const shelfScreen = document.querySelector("#shelfScreen");
const characterScreen = document.querySelector("#characterScreen");
const failedScreen = document.querySelector("#failedScreen");

const characterStage = document.querySelector("#characterStage");
const failedStage = document.querySelector("#failedStage");

const startButton = document.querySelector("#startButton");
const backToStartButton = document.querySelector("#backToStartButton");
const backToShelfButton = document.querySelector("#backToShelfButton");

const shoeButtons = document.querySelectorAll(".shoe-btn");

const characterName = document.querySelector("#characterName");
const dialogueText = document.querySelector("#dialogueText");
const characterImage = document.querySelector("#characterImage");

const choiceOne = document.querySelector("#choiceOne");
const choiceTwo = document.querySelector("#choiceTwo");
const choiceGroup = document.querySelector("#choiceGroup");
const failedCharacter = document.querySelector("#failedCharacter");

let currentCharacter = null;
let currentStory = null;
let currentStepKey = null;

function showScreen(screenToShow) {
  const screens = document.querySelectorAll(".screen");

  screens.forEach((screen) => {
    screen.classList.remove("is-active");
  });

  screenToShow.classList.add("is-active");
}

function resetCharacterClasses() {
  characterStage.classList.remove(
    "character-stage--ana",
    "character-stage--carlos",
    "character-stage--maria",
    "character-stage--jorge"
  );

  choiceOne.classList.remove(
    "choice-btn--ana",
    "choice-btn--carlos",
    "choice-btn--maria",
    "choice-btn--jorge"
  );

  choiceTwo.classList.remove(
    "choice-btn--ana",
    "choice-btn--carlos",
    "choice-btn--maria",
    "choice-btn--jorge"
  );

  backToShelfButton.classList.remove(
    "failed-back-btn--ana",
    "failed-back-btn--carlos",
    "failed-back-btn--maria",
    "failed-back-btn--jorge"
  );
}

function loadCharacter(characterKey) {
  currentCharacter = characterKey;
  currentStory = gameData[characterKey];

  if (!currentStory) {
    console.log("Este personaje todavía no está programado:", characterKey);
    return;
  }

  currentStepKey = currentStory.startStep;

  resetCharacterClasses();

  characterStage.classList.add(`character-stage--${currentStory.className}`);
  choiceOne.classList.add(`choice-btn--${currentStory.className}`);
  choiceTwo.classList.add(`choice-btn--${currentStory.className}`);
  backToShelfButton.classList.add(`failed-back-btn--${currentStory.className}`);

  characterStage.style.backgroundImage = `url("${currentStory.background}")`;

  showCharacterStep(currentStepKey);
  showScreen(characterScreen);
}

function showCharacterStep(stepKey) {
  const currentStep = currentStory.steps[stepKey];

  if (!currentStep) {
    console.log("No existe este paso:", stepKey);
    return;
  }

  currentStepKey = stepKey;

  characterName.textContent = currentStory.name;
  dialogueText.textContent = currentStep.text;

  characterImage.src = currentStory.expressions[currentStep.expression];
  characterImage.alt = currentStory.name;

  choiceOne.textContent = currentStep.choices[0].text;
  choiceTwo.textContent = currentStep.choices[1].text;

  choiceOne.dataset.next = currentStep.choices[0].next;
  choiceTwo.dataset.next = currentStep.choices[1].next;

  choiceTwo.style.display = "flex";
  choiceGroup.classList.remove("is-final-choice");
}

function handleChoice(nextStep) {
  if (nextStep === "failed") {
    showFailedScreen();
    return;
  }

  showCharacterStep(nextStep);
}

function showFailedScreen() {
  failedCharacter.src = currentStory.expressions[currentStory.failed.expression];
  failedCharacter.alt = currentStory.name;

  showScreen(failedScreen);
}

startButton.addEventListener("click", () => {
  showScreen(shelfScreen);
});

backToStartButton.addEventListener("click", () => {
  showScreen(startScreen);
});

backToShelfButton.addEventListener("click", () => {
  showScreen(shelfScreen);
});

shoeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const character = button.dataset.character;
    loadCharacter(character);
  });
});

choiceOne.addEventListener("click", () => {
  const nextStep = choiceOne.dataset.next;
  handleChoice(nextStep);
});

choiceTwo.addEventListener("click", () => {
  const nextStep = choiceTwo.dataset.next;
  handleChoice(nextStep);
});