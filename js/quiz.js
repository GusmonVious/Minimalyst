// Quiz data
const quizData = {
  sections: [
    {
      name: "Possessions",
      questions: [
        {
          id: "p1",
          text: "How often do you go through your belongings and declutter?",
          options: [
            { text: "Rarely or never", value: 0 },
            { text: "Once a year", value: 1 },
            { text: "Every few months", value: 2 },
            { text: "Monthly or more frequently", value: 3 }
          ]
        },
        {
          id: "p2",
          text: "When was the last time you purchased something non-essential?",
          options: [
            { text: "This week", value: 0 },
            { text: "This month", value: 1 },
            { text: "Several months ago", value: 2 },
            { text: "I can't remember", value: 3 }
          ]
        },
        {
          id: "p3",
          text: "How do you feel about your current amount of possessions?",
          options: [
            { text: "I need more things", value: 0 },
            { text: "I'm comfortable with what I have", value: 1 },
            { text: "I could live with fewer things", value: 2 },
            { text: "I actively try to reduce my possessions", value: 3 }
          ]
        },
        {
          id: "p4",
          text: "What's your approach to receiving gifts?",
          options: [
            { text: "I love receiving physical gifts", value: 0 },
            { text: "I appreciate gifts but feel overwhelmed sometimes", value: 1 },
            { text: "I prefer experiences over physical gifts", value: 2 },
            { text: "I've asked friends and family not to give me physical gifts", value: 3 }
          ]
        }
      ]
    },
    {
      name: "Digital Life",
      questions: [
        {
          id: "d1",
          text: "How organized is your digital space (email, files, photos)?",
          options: [
            { text: "Very disorganized with thousands of unread emails", value: 0 },
            { text: "Somewhat cluttered but manageable", value: 1 },
            { text: "Mostly organized with occasional cleanup", value: 2 },
            { text: "Highly organized with regular digital decluttering", value: 3 }
          ]
        },
        {
          id: "d2",
          text: "How much time do you spend on social media daily?",
          options: [
            { text: "More than 3 hours", value: 0 },
            { text: "1-3 hours", value: 1 },
            { text: "Less than 1 hour", value: 2 },
            { text: "I've minimized or eliminated social media", value: 3 }
          ]
        },
        {
          id: "d3",
          text: "How many apps do you have on your phone?",
          options: [
            { text: "50+ apps, many I rarely use", value: 0 },
            { text: "25-50 apps, most are useful", value: 1 },
            { text: "10-25 apps, all with purpose", value: 2 },
            { text: "Fewer than 10 essential apps", value: 3 }
          ]
        },
        {
          id: "d4",
          text: "What's your approach to digital notifications?",
          options: [
            { text: "I keep all notifications on", value: 0 },
            { text: "I disable some but keep most active", value: 1 },
            { text: "I only enable important notifications", value: 2 },
            { text: "I disable nearly all notifications", value: 3 }
          ]
        }
      ]
    },
    {
      name: "Lifestyle",
      questions: [
        {
          id: "l1",
          text: "How would you describe your living space?",
          options: [
            { text: "Filled with decorations and items", value: 0 },
            { text: "Comfortably furnished with some extra items", value: 1 },
            { text: "Intentionally designed with purpose", value: 2 },
            { text: "Minimalist with only essential items", value: 3 }
          ]
        },
        {
          id: "l2",
          text: "How do you approach your schedule and commitments?",
          options: [
            { text: "Always busy with little free time", value: 0 },
            { text: "Mostly full but manageable", value: 1 },
            { text: "Balanced with intentional free time", value: 2 },
            { text: "Deliberately minimal with plenty of margin", value: 3 }
          ]
        },
        {
          id: "l3",
          text: "What's your approach to making purchases?",
          options: [
            { text: "I buy what I want when I want it", value: 0 },
            { text: "I consider if I need it but often buy anyway", value: 1 },
            { text: "I wait a few days before making non-essential purchases", value: 2 },
            { text: "I follow a strict 'one in, one out' policy", value: 3 }
          ]
        },
        {
          id: "l4",
          text: "How important is sustainability in your daily choices?",
          options: [
            { text: "Not something I consider", value: 0 },
            { text: "I'm aware but don't always prioritize it", value: 1 },
            { text: "Important for major decisions", value: 2 },
            { text: "Central to almost all my decisions", value: 3 }
          ]
        }
      ]
    }
  ],
  results: [
    {
      range: [0, 20],
      label: "Consumption Explorer",
      character: "images/character-0.png",
      generalFeedback: "You're at the beginning of your minimalism journey. Your lifestyle currently embraces abundance and variety, but there's potential to discover the benefits of intentional simplicity.",
      recommendations: [
        {
          section: "Possessions",
          advice: "Start small by decluttering one area of your home. Try the 'one in, one out' rule for new purchases.",
          link: "minimalism.html#decluttering"
        },
        {
          section: "Digital Life",
          advice: "Begin with a simple email cleanup and disable non-essential notifications.",
          link: "minimalism.html#digital-minimalism"
        },
        {
          section: "Lifestyle",
          advice: "Practice saying no to one commitment this week that doesn't align with your priorities.",
          link: "minimalism.html#intentional-living"
        }
      ]
    },
    {
      range: [21, 40],
      label: "Minimalism Curious",
      character: "images/character-20.png",
      generalFeedback: "You're becoming aware of minimalism principles and have taken some initial steps. You're starting to recognize the weight of excess belongings and commitments.",
      recommendations: [
        {
          section: "Possessions",
          advice: "Try a 30-day minimalism challenge where you remove one item each day.",
          link: "minimalism.html#30-day-challenge"
        },
        {
          section: "Digital Life",
          advice: "Implement a digital detox for one day per week and organize your digital files into a simple system.",
          link: "minimalism.html#digital-detox"
        },
        {
          section: "Lifestyle",
          advice: "Create a simple morning routine that helps you focus on your priorities for the day.",
          link: "minimalism.html#mindful-routines"
        }
      ]
    },
    {
      range: [41, 60],
      label: "Balanced Minimalist",
      character: "images/character-40.png",
      generalFeedback: "You've embraced many minimalist principles while maintaining balance. You understand the value of intentionality but aren't extreme in your approach.",
      recommendations: [
        {
          section: "Possessions",
          advice: "Evaluate your belongings by category (clothing, books, etc.) and keep only what truly adds value.",
          link: "minimalism.html#category-method"
        },
        {
          section: "Digital Life",
          advice: "Create boundaries for technology use and implement regular digital decluttering sessions.",
          link: "minimalism.html#tech-boundaries"
        },
        {
          section: "Lifestyle",
          advice: "Practice mindful consumption by questioning each purchase against your values.",
          link: "sustainableLiving.html#mindful-consumption"
        }
      ]
    },
    {
      range: [61, 80],
      label: "Intentional Minimalist",
      character: "images/character-60.png",
      generalFeedback: "You've embraced minimalism in most areas of your life. You make thoughtful choices about possessions, time, and digital consumption.",
      recommendations: [
        {
          section: "Possessions",
          advice: "Consider a capsule wardrobe or other systems that streamline decision-making.",
          link: "minimalism.html#capsule-wardrobe"
        },
        {
          section: "Digital Life",
          advice: "Create a digital minimalism philosophy that aligns with your values.",
          link: "minimalism.html#digital-philosophy"
        },
        {
          section: "Lifestyle",
          advice: "Focus on deepening meaningful relationships and experiences rather than acquiring more.",
          link: "minimalism.html#meaningful-connections"
        }
      ]
    },
    {
      range: [81, 100],
      label: "Minimalism Master",
      character: "images/character-80.png",
      generalFeedback: "You exemplify minimalist principles across all aspects of life. Your intentional approach to possessions, time, and focus creates space for what truly matters to you.",
      recommendations: [
        {
          section: "Possessions",
          advice: "Share your minimalist journey with others who could benefit from your experience.",
          link: "minimalism.html#minimalism-community"
        },
        {
          section: "Digital Life",
          advice: "Develop advanced systems for maintaining digital simplicity as technology evolves.",
          link: "minimalism.html#evolving-digital-minimalism"
        },
        {
          section: "Lifestyle",
          advice: "Explore deeper philosophical aspects of minimalism beyond material possessions.",
          link: "minimalism.html#philosophy"
        }
      ]
    }
  ]
};

// Quiz state
let currentSection = 0;
let currentQuestion = 0;
let userAnswers = new Array(quizData.sections.length * 4).fill(null);
let totalScore = 0;

// DOM Elements
const startButton = document.getElementById('startQuiz');
const quizSection = document.getElementById('quizSection');
const questionContainer = document.querySelector('.question-container');
const prevButton = document.getElementById('prevQuestion');
const nextButton = document.getElementById('nextQuestion');
const progressFill = document.querySelector('.progress-fill');
const checkpoints = document.querySelectorAll('.checkpoint');
const resultsContainer = document.getElementById('results');
const retakeButton = document.getElementById('retakeQuiz');

// Start quiz
startButton.addEventListener('click', () => {
  quizSection.classList.remove('hidden');
  startButton.parentElement.style.display = 'none';
  displayQuestion();
});

// Display current question
function displayQuestion() {
  const section = quizData.sections[currentSection];
  const question = section.questions[currentQuestion];
  
  questionContainer.innerHTML = `
    <div class="question">
      <h3>${question.text}</h3>
      <div class="options">
        ${question.options.map((option, index) => `
          <div class="option ${userAnswers[currentSection * 4 + currentQuestion]?.selected === index ? 'selected' : ''}" 
               data-index="${index}">
            ${option.text}
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Add click handlers to options
  document.querySelectorAll('.option').forEach((option, index) => {
    option.addEventListener('click', () => selectOption(index));
  });

  updateNavigation();
  updateProgress();
}

// Select option
function selectOption(index) {
  const answerIndex = currentSection * 4 + currentQuestion;
  userAnswers[answerIndex] = {
    selected: index,
    value: quizData.sections[currentSection].questions[currentQuestion].options[index].value
  };
  
  document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
  document.querySelector(`.option[data-index="${index}"]`).classList.add('selected');
  
  nextButton.disabled = false;
}

// Navigation
prevButton.addEventListener('click', () => {
  if (currentQuestion > 0) {
    currentQuestion--;
  } else if (currentSection > 0) {
    currentSection--;
    currentQuestion = quizData.sections[currentSection].questions.length - 1;
  }
  displayQuestion();
});

nextButton.addEventListener('click', () => {
  if (currentQuestion < quizData.sections[currentSection].questions.length - 1) {
    currentQuestion++;
  } else if (currentSection < quizData.sections.length - 1) {
    currentSection++;
    currentQuestion = 0;
  } else {
    showResults();
    return;
  }
  displayQuestion();
});

// Update navigation buttons
function updateNavigation() {
  prevButton.disabled = currentSection === 0 && currentQuestion === 0;
  nextButton.textContent = 
    currentSection === quizData.sections.length - 1 && 
    currentQuestion === quizData.sections[currentSection].questions.length - 1 
      ? 'See Results' 
      : 'Next';
  
  const answerIndex = currentSection * 4 + currentQuestion;
  nextButton.disabled = !userAnswers[answerIndex];
}

// Update progress
function updateProgress() {
  const totalQuestions = quizData.sections.length * 4;
  const currentQuestionTotal = currentSection * 4 + currentQuestion;
  const progress = (currentQuestionTotal / totalQuestions) * 100;
  
  progressFill.style.width = `${progress}%`;
  
  checkpoints.forEach((checkpoint, index) => {
    checkpoint.classList.toggle('active', index <= currentSection);
  });
}

// Show results
function showResults() {
  // Calculate total score
  const maxPossibleScore = quizData.sections.length * 4 * 3; // 3 sections * 4 questions * max value of 3
  const actualScore = userAnswers.reduce((sum, answer) => sum + answer.value, 0);
  const percentage = Math.round((actualScore / maxPossibleScore) * 100);

  // Get result tier
  const resultTier = quizData.results.find(result => 
    percentage >= result.range[0] && percentage <= result.range[1]
  );

  // Hide quiz, show results
  document.querySelector('.quiz-container').classList.add('hidden');
  resultsContainer.classList.remove('hidden');

  // Update results content
  resultsContainer.innerHTML = `
    <div class="results-content">
      <div class="score-display">
        <div class="score-circle">
          <span class="score-number">0</span>%
        </div>
        <h2>${resultTier.label}</h2>
      </div>
      <div class="character-art">
        <img src="${resultTier.character}" alt="Character representation of your minimalism level">
      </div>
      <div class="general-feedback">
        <p>${resultTier.generalFeedback}</p>
      </div>
      <div class="recommendations">
        <h3>Your Personalized Journey</h3>
        <div class="recommendation-cards">
          ${resultTier.recommendations.map(rec => `
            <div class="recommendation-card">
              <h4>${rec.section}</h4>
              <p>${rec.advice}</p>
              <a href="${rec.link}" class="btn secondary">Learn More</a>
            </div>
          `).join('')}
        </div>
      </div>
      <button class="btn primary" id="retakeQuiz">Retake Quiz</button>
    </div>
  `;

  // Animate score
  const scoreNumber = resultsContainer.querySelector('.score-number');
  let currentNumber = 0;
  const interval = setInterval(() => {
    if (currentNumber === percentage) {
      clearInterval(interval);
    } else {
      currentNumber++;
      scoreNumber.textContent = currentNumber;
    }
  }, 20);

  // Add retake button listener
  document.getElementById('retakeQuiz').addEventListener('click', () => {
    currentSection = 0;
    currentQuestion = 0;
    userAnswers = new Array(quizData.sections.length * 4).fill(null);
    totalScore = 0;
    
    resultsContainer.classList.add('hidden');
    document.querySelector('.quiz-container').classList.remove('hidden');
    startButton.parentElement.style.display = 'block';
    
    displayQuestion();
  });
}