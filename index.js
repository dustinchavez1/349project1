const quizzes = {
  catQuiz: [
      {
        question: "Cats can rotate their ears up to 180 degrees.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ],
        points: 1
    },
    {
        question: "Cats have fewer teeth than dogs.",
        answers: [
            { text: "True", correct: true },
            { text: "False", correct: false }
        ],
        points: 1
    },
  
    {
        
        question: "What is the group of words associated with cats called?",
        answers: [
            { text: "Clowder", correct: true },
            { text: "Pack", correct: false },
            { text: "Herd", correct: false },
            { text: "Flock", correct: false }
        ],
        points: 2
    },
    {
        question: "Cats have how many whiskers, on average?",
        answers: [
            { text: "12", correct: false },
            { text: "24", correct: true },
            { text: "16", correct: false },
            { text: "32", correct: false }
        ],
        points: 2
    },
    {
        question: "Which cat breed is known for being hairless?",
        answers: [
            { text: "Siamese", correct: false },
            { text: "Sphynx", correct: true },
            { text: "Persian", correct: false },
            { text: "Maine Coon", correct: false }
        ],
        points: 2
    },
    {
        question: "What is the average sleep duration of a domestic cat per day?",
        answers: [
            { text: "8-10 hours", correct: false },
            { text: "12-16 hours", correct: true },
            { text: "6-8 hours", correct: false },
            { text: "18-20 hours", correct: false }
        ],
        points: 2
    },
    {
        question: "Which of these is a sign of a cat's happiness?",
        answers: [
            { text: "Purring", correct: true },
            { text: "Hissing", correct: false },
            { text: "Growling", correct: false },
            { text: "Flattened ears", correct: false }
        ],
        points: 2
    },
    {
        question: "Cats are known to be good at which type of movement?",
        answers: [
            { text: "Jumping", correct: true },
            { text: "Digging", correct: false },
            { text: "Swimming", correct: false },
            { text: "Flying", correct: false }
        ],
        points: 2
    },
    {
        question: "What is the world record for the largest number of kittens ever born to a single cat?",
        answers: [
            { text: "19", correct: false },
            { text: "14", correct: false },
            { text: "217", correct: false },
            { text: "218", correct: true }
        ],
        points: 2
    },
    {
        question: "Which of these cat breeds is known for its lack of a tail?",
        answers: [
            { text: "Siamese", correct: false },
            { text: "Manx", correct: true },
            { text: "Bengal", correct: false },
            { text: "Russian Blue", correct: false }
        ],
        points: 2
    },
    {
        question: "How do cats communicate with each other?",
        answers: [
            { text: "Through barking", correct: false },
            { text: "Using pheromones", correct: true },
            { text: "By dancing", correct: false },
            { text: "Singing", correct: false }
        ],
        points: 2
    },
    {
        question: "What is a group of kittens called?",
        answers: [
            { text: "A kindle", correct: true },
            { text: "A litter", correct: false },
            { text: "A pack", correct: false },
            { text: "A clowder", correct: false }
        ],
        points: 2
    }
],
dogQuiz: [
    {
      question: "Dogs have about 10 different types of vocal sounds.",
      answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
      ],
      points: 1
  },
  {
      question: "Dogs cannot see colors, only shades of gray.",
      answers: [
          { text: "True", correct: false },
          { text: "False", correct: true }
      ],
      points: 1
  },

  {
      question: "What is the most popular breed of dog in the United States?",
      answers: [
          { text: "German Shepherd", correct: false },
          { text: "Labrador Retriever", correct: true },
          { text: "Golden Retriever", correct: false },
          { text: "Poodle", correct: false }
      ],
      points: 2
  },
  {
      question: "Which part of a dog's body is unique, much like human fingerprints?",
      answers: [
          { text: "Paw", correct: false },
          { text: "Nose", correct: true },
          { text: "Ear", correct: false },
          { text: "Tail", correct: false }
      ],
      points: 2
  },
  {
      question: "How many teeth does an adult dog typically have?",
      answers: [
          { text: "24", correct: false },
          { text: "32", correct: false },
          { text: "42", correct: true },
          { text: "38", correct: false }
      ],
      points: 2
  },
  {
      question: "Which dog breed is known for its blue-black tongue?",
      answers: [
          { text: "Labrador Retriever", correct: false },
          { text: "Chow Chow", correct: true },
          { text: "Siberian Husky", correct: false },
          { text: "Doberman", correct: false }
      ],
      points: 2
  },
  {
      question: "What is the smallest breed of dog?",
      answers: [
          { text: "Dachshund", correct: false },
          { text: "Chihuahua", correct: true },
          { text: "Pomeranian", correct: false },
          { text: "Yorkshire Terrier", correct: false }
      ],
      points: 2
  },
  {
      question: "Which breed of dog is known as the 'King of Terriers'?",
      answers: [
          { text: "Airedale Terrier", correct: true },
          { text: "Scottish Terrier", correct: false },
          { text: "Jack Russell Terrier", correct: false },
          { text: "Cairn Terrier", correct: false }
      ],
      points: 2
  },
  {
      question: "Which dog breed is known for its incredible sense of smell and is often used by police and law enforcement?",
      answers: [
          { text: "German Shepherd", correct: false },
          { text: "Bloodhound", correct: true },
          { text: "Beagle", correct: false },
          { text: "Rottweiler", correct: false }
      ],
      points: 2
  },
  {
      question: "What is the name of the dog breed that has a black tongue?",
      answers: [
          { text: "Chow Chow", correct: true },
          { text: "Golden Retriever", correct: false },
          { text: "Shih Tzu", correct: false },
          { text: "Pug", correct: false }
      ],
      points: 2
  },
  {
      question: "Which dog breed is known for its wrinkly, short-muzzled face and curled tail?",
      answers: [
          { text: "Bulldog", correct: true },
          { text: "Boxer", correct: false },
          { text: "Pug", correct: false },
          { text: "Shar Pei", correct: false }
      ],
      points: 2
  },
  {
      question: "What breed of dog was originally bred to hunt foxes?",
      answers: [
          { text: "Beagle", correct: false },
          { text: "Fox Terrier", correct: true },
          { text: "Border Collie", correct: false },
          { text: "Dalmatian", correct: false }
      ],
      points: 2
  }
],

birdQuiz: [
    {
      question: "All birds have the ability to fly.",
      answers: [
          { text: "True", correct: false },
          { text: "False", correct: true }
      ],
      points: 1
  },
  {
      question: "Birds are warm-blooded creatures.",
      answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
      ],
      points: 1
  },
  {
      question: "What is the fastest bird in the world?",
      answers: [
          { text: "Eagle", correct: false },
          { text: "Peregrine Falcon", correct: true },
          { text: "Ostrich", correct: false },
          { text: "Hummingbird", correct: false }
      ],
      points: 2
  },
  {
      question: "Which bird is known for its mimicry skills?",
      answers: [
          { text: "Parrot", correct: false },
          { text: "Lyrebird", correct: true },
          { text: "Crow", correct: false },
          { text: "Owl", correct: false }
      ],
      points: 2
  },
  {
      question: "What is the largest bird in the world?",
      answers: [
          { text: "Eagle", correct: false },
          { text: "Ostrich", correct: true },
          { text: "Albatross", correct: false },
          { text: "Swan", correct: false }
      ],
      points: 2
  },
  {
      question: "Which bird is known as a symbol of peace?",
      answers: [
          { text: "Dove", correct: true },
          { text: "Sparrow", correct: false },
          { text: "Peacock", correct: false },
          { text: "Robin", correct: false }
      ],
      points: 2
  },
  {
      question: "What do you call a group of crows?",
      answers: [
          { text: "Flock", correct: false },
          { text: "Murder", correct: true },
          { text: "Pack", correct: false },
          { text: "Gaggle", correct: false }
      ],
      points: 2
  },
  {
      question: "Which bird is known for its beautiful tail display?",
      answers: [
          { text: "Peacock", correct: true },
          { text: "Eagle", correct: false },
          { text: "Parrot", correct: false },
          { text: "Flamingo", correct: false }
      ],
      points: 2
  },
  {
      question: "What is the smallest bird in the world?",
      answers: [
          { text: "Sparrow", correct: false },
          { text: "Hummingbird", correct: true },
          { text: "Robin", correct: false },
          { text: "Pigeon", correct: false }
      ],
      points: 2
  },
  {
      question: "Which bird can rotate its head up to 270 degrees?",
      answers: [
          { text: "Eagle", correct: false },
          { text: "Owl", correct: true },
          { text: "Sparrow", correct: false },
          { text: "Flamingo", correct: false }
      ],
      points: 2
  },
  {
      question: "Which bird is known for building complex nests?",
      answers: [
          { text: "Swallow", correct: false },
          { text: "Weaver Bird", correct: true },
          { text: "Eagle", correct: false },
          { text: "Penguin", correct: false }
      ],
      points: 2
  },
  {
      question: "What characteristic is unique to birds?",
      answers: [
          { text: "Having fur", correct: false },
          { text: "Laying eggs", correct: false },
          { text: "Flying", correct: false },
          { text: "Feathers", correct: true }
      ],
      points: 2
  }
],

  fishQuiz: [
    {
      question: "Fish communicate with each other through sounds including clicks, whistles, and pulses.",
      answers: [
          { text: "True", correct: true },
          { text: "False", correct: false }
      ],
      points: 1
  },
  {
      question: "All fish lay eggs.",
      answers: [
          { text: "True", correct: false },
          { text: "False", correct: true }
      ],
      points: 1
  },
  
    {
        question: "Which fish is known as the 'king of the aquarium'?",
        answers: [
            { text: "Goldfish", correct: false },
            { text: "Discus", correct: true },
            { text: "Betta", correct: false },
            { text: "Guppy", correct: false }
        ],
        points: 2
    },
    {
        question: "What is the largest species of fish in the ocean?",
        answers: [
            { text: "Great White Shark", correct: false },
            { text: "Blue Whale", correct: false },
            { text: "Whale Shark", correct: true },
            { text: "Giant Squid", correct: false }
        ],
        points: 2
    },
    {
        question: "Which fish has the ability to regenerate its heart?",
        answers: [
            { text: "Clownfish", correct: false },
            { text: "Zebrafish", correct: true },
            { text: "Goldfish", correct: false },
            { text: "Salmon", correct: false }
        ],
        points: 2
    },
    {
        question: "What type of fish is Nemo from the movie 'Finding Nemo'?",
        answers: [
            { text: "Clownfish", correct: true },
            { text: "Betta", correct: false },
            { text: "Goldfish", correct: false },
            { text: "Tang", correct: false }
        ],
        points: 2
    },
    {
        question: "Which fish is known for its schooling behavior?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Salmon", correct: false },
            { text: "Sardine", correct: true },
            { text: "Goldfish", correct: false }
        ],
        points: 2
    },
    {
        question: "What is the main diet of a Piranha?",
        answers: [
            { text: "Plants", correct: false },
            { text: "Fish", correct: false },
            { text: "Meat", correct: true },
            { text: "Insects", correct: false }
        ],
        points: 2
    },
    {
        question: "Which freshwater fish is known for its aggressive nature?",
        answers: [
            { text: "Guppy", correct: false },
            { text: "Betta", correct: true },
            { text: "Goldfish", correct: false },
            { text: "Carp", correct: false }
        ],
        points: 2
    },
    {
        question: "What is unique about the eyes of a flounder?",
        answers: [
            { text: "They are blind", correct: false },
            { text: "They can see ultraviolet light", correct: false },
            { text: "They are on the same side of its head", correct: true },
            { text: "They change color", correct: false }
        ],
        points: 2
    },
    {
        question: "Which fish is capable of changing its gender?",
        answers: [
            { text: "Clownfish", correct: true },
            { text: "Salmon", correct: false },
            { text: "Tuna", correct: false },
            { text: "Shark", correct: false }
        ],
        points: 2
    },
    {
        question: "What type of water do Salmon fish migrate to for spawning?",
        answers: [
            { text: "Freshwater", correct: true },
            { text: "Saltwater", correct: false },
            { text: "Brackish water", correct: false },
            { text: "They do not migrate", correct: false }
        ],
        points: 2
    },
]

};
let scores = {
  'catQuiz': [],
  'dogQuiz': [],
  'birdQuiz': [],
  'fishQuiz': []
};

let currentQuiz = null;
let questionIndex = 0;
let score = 0;

function startQuiz(quizId) {
    currentQuiz = quizzes[quizId].map(question => {
      // Create a new object for each question without the selectedAnswer property
      const { selectedAnswer, ...rest } = question;
      return { ...rest };
    });
    currentQuiz.id = quizId;
    questionIndex = 0;
    score = 0;
    showQuestion();
  }

function showQuestion() {
  const question = currentQuiz[questionIndex];
  const questionContainer = document.getElementById('question-container');

  questionContainer.innerHTML = ''; 

  // Create card for the question
  const card = document.createElement('div');
  card.className = 'card text-center mb-3';
  questionContainer.appendChild(card);

  const cardHeader = document.createElement('div');
  cardHeader.className = 'card-header';
  cardHeader.innerText = `Question ${questionIndex + 1}: ${question.question}`;
  card.appendChild(cardHeader);

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  card.appendChild(cardBody);

  question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.className = 'btn btn-primary m-2';
      button.innerText = answer.text;
      button.addEventListener('click', () => {
          selectAnswer(questionIndex, answer);
          if (questionIndex < currentQuiz.length - 1) {
              showNextQuestion();
          }
      });
      cardBody.appendChild(button);
  });
 const lineBreak = document.createElement('br');

// question number buttons
if (currentQuiz.length > 1) {
    const navigationContainer = document.createElement('div');
    navigationContainer.className = 'navigation-container mt-3';

    currentQuiz.forEach((_, index) => {
        const navButton = document.createElement('button');
        navButton.className = 'btn btn-secondary m-1';
        navButton.innerText = index + 1;
        navButton.onclick = () => {
            questionIndex = index;
            showQuestion();
        };
        navigationContainer.appendChild(navButton);
    });

    questionContainer.appendChild(lineBreak);
    questionContainer.appendChild(navigationContainer);
}


  // Submit button
  const submitButton = document.createElement('button');
  submitButton.className = 'btn btn-success mt-3';
  submitButton.innerText = 'Submit Quiz';
  submitButton.onclick = showScore;
  questionContainer.appendChild(submitButton);
}

function selectAnswer(index, answer) {
  currentQuiz[index].selectedAnswer = answer;
  if (answer.correct) {
      score += currentQuiz[index].points;
  }
}

function showNextQuestion() {
  questionIndex++;
  showQuestion();
}

function showScore() {
  const questionContainer = document.getElementById('question-container');
  const nameInput = document.getElementById('name');
  const playerName = nameInput.value || 'Anonymous';  

  let finalScore = 0;
  currentQuiz.forEach(question => {
      if (question.selectedAnswer && question.selectedAnswer.correct) {
          finalScore += question.points;
      }
  });

  questionContainer.innerHTML = `Your score: ${finalScore}/22`;
  updateLeaderboard(currentQuiz.id, { name: playerName, score: finalScore });
}
function updateLeaderboard(quizId, newScore) {
  console.log("quiz id", quizId)
  console.log('Updating leaderboard for:', quizId, 'with score:', newScore);
  console.log('Current scores array:', scores[quizId]);

  if (!scores[quizId]) {
    console.error('No score array found for quizId:', quizId);
    return;
  }

  scores[quizId].push(newScore);

  let topScores = scores[quizId].sort((a, b) => b.score - a.score).slice(0, 3);
  topScores.forEach((score, index) => {
      document.getElementById(`${quizId}-score-${index + 1}`).textContent = `${score.name}: ${score.score}`;
  });
}


document.getElementById('start-cat-quiz').addEventListener('click', () => startQuiz('catQuiz'));
document.getElementById('start-dog-quiz').addEventListener('click', () => startQuiz('dogQuiz'));
document.getElementById('start-bird-quiz').addEventListener('click', () => startQuiz('birdQuiz'));
document.getElementById('start-fish-quiz').addEventListener('click', () => startQuiz('fishQuiz'));
