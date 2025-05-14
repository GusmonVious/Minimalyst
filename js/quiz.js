document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        {
            question: "How do you feel about your current possessions?",
            options: [
                { text: "I have exactly what I need, nothing more", score: 100 },
                { text: "I could probably get rid of some things", score: 75 },
                { text: "I have more than I need but I use most of it", score: 50 },
                { text: "I have trouble letting go of things", score: 25 }
            ]
        },
        {
            question: "When shopping, what's your typical approach?",
            options: [
                { text: "I only buy what I absolutely need", score: 100 },
                { text: "I make a list and mostly stick to it", score: 75 },
                { text: "I sometimes buy extra things that catch my eye", score: 50 },
                { text: "I often make impulse purchases", score: 25 }
            ]
        },
        {
            question: "How would you describe your living space?",
            options: [
                { text: "Minimal and carefully curated", score: 100 },
                { text: "Organized with some decorative items", score: 75 },
                { text: "Comfortable with personal touches", score: 50 },
                { text: "Full of memories and collections", score: 25 }
            ]
        },
        {
            question: "How often do you declutter?",
            options: [
                { text: "Regularly, it's part of my routine", score: 100 },
                { text: "Every few months when needed", score: 75 },
                { text: "Once or twice a year", score: 50 },
                { text: "Only when I really have to", score: 25 }
            ]
        },
        {
            question: "What's your approach to digital content?",
            options: [
                { text: "Minimal apps, regular digital decluttering", score: 100 },
                { text: "Organized folders, some unused apps", score: 75 },
                { text: "Multiple apps but they're all useful", score: 50 },
                { text: "I keep everything just in case", score: 25 }
            ]
        }
    ];

    let currentQuestion = 0;
    let userAnswers = new Array(questions.length).fill(null);
    
    const startQuiz = document.getElementById('startQuiz');
    const quizSection = document.getElementById('quizSection');
    const questionContainer = document.getElementById('questionContainer');
    const resultContainer = document.getElementById('resultContainer');
    const scorePercentage = document.getElementById('scorePercentage');
    const resultMessage = document.getElementById('resultMessage');
    const recommendations = document.getElementById('recommendations');
    const retakeQuiz = document.getElementById('retakeQuiz');
    const prevButton = document.getElementById('prevQuestion');
    const nextButton = document.getElementById('nextQuestion');
    const progressFill = document.querySelector('.progress-fill');
    const progressSteps = document.querySelectorAll('.step');
    const progressCircle = document.querySelector('.progress-ring-circle');
    const circumference = 2 * Math.PI * 90;

    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = circumference;

    function updateProgress() {
        const progress = ((currentQuestion + 1) / questions.length) * 100;
        progressFill.style.width = `${progress}%`;
        
        progressSteps.forEach((step, index) => {
            if (index < currentQuestion) {
                step.classList.add('completed');
                step.classList.remove('active');
            } else if (index === currentQuestion) {
                step.classList.add('active');
                step.classList.remove('completed');
            } else {
                step.classList.remove('active', 'completed');
            }
        });
    }

    function setProgress(percent) {
        const offset = circumference - (percent / 100 * circumference);
        progressCircle.style.strokeDashoffset = offset;
    }

    function updateNavigationButtons() {
        prevButton.style.display = currentQuestion > 0 ? 'block' : 'none';
        nextButton.style.display = userAnswers[currentQuestion] !== null ? 'block' : 'none';
        nextButton.textContent = currentQuestion === questions.length - 1 ? 'See Results' : 'Next';
    }

    function displayQuestion() {
        const question = questions[currentQuestion];
        questionContainer.innerHTML = `
            <div class="question-header">
                <div class="question-progress">
                    Question ${currentQuestion + 1} of ${questions.length}
                </div>
                <h2>${question.question}</h2>
            </div>
            <div class="options-container">
                ${question.options.map((option, index) => `
                    <button class="option-button ${userAnswers[currentQuestion] === index ? 'selected' : ''}" 
                            data-index="${index}" 
                            data-score="${option.score}">
                        ${option.text}
                    </button>
                `).join('')}
            </div>
        `;

        const optionButtons = questionContainer.querySelectorAll('.option-button');
        optionButtons.forEach(button => {
            button.addEventListener('click', () => {
                optionButtons.forEach(b => b.classList.remove('selected'));
                button.classList.add('selected');
                userAnswers[currentQuestion] = parseInt(button.dataset.index);
                updateNavigationButtons();
            });
        });

        updateProgress();
        updateNavigationButtons();
    }

    function getRecommendations(score) {
        if (score >= 90) {
            return {
                title: "Maintaining Your Minimalist Lifestyle",
                items: [
                    "Visit our Sustainable Living section for advanced eco-friendly practices",
                    "Check out our Minimalism page for tips on maintaining your minimal lifestyle",
                    "Share your journey with others in our community"
                ]
            };
        } else if (score >= 70) {
            return {
                title: "Fine-Tuning Your Minimalist Journey",
                items: [
                    "Explore our Minimalism section for decluttering strategies",
                    "Read about sustainable living to enhance your minimal lifestyle",
                    "Consider our advanced minimalism guides for next steps"
                ]
            };
        } else if (score >= 50) {
            return {
                title: "Building Minimalist Habits",
                items: [
                    "Start with our Minimalism Basics guide",
                    "Check out our Sustainable Living tips for practical steps",
                    "Try our decluttering challenges in the Minimalism section"
                ]
            };
        } else {
            return {
                title: "Starting Your Minimalist Journey",
                items: [
                    "Begin with our Introduction to Minimalism guide",
                    "Visit our Minimalism section for beginner-friendly tips",
                    "Explore simple sustainable living practices"
                ]
            };
        }
    }

    function showResults() {
        questionContainer.style.display = 'none';
        prevButton.style.display = 'none';
        nextButton.style.display = 'none';
        resultContainer.style.display = 'block';

        const scores = userAnswers.map((answerIndex, questionIndex) => 
            questions[questionIndex].options[answerIndex].score
        );
        const averageScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
        
        let currentScore = 0;
        const animationDuration = 1500;
        const frameRate = 60;
        const increment = averageScore / (animationDuration / (1000 / frameRate));

        const animation = setInterval(() => {
            currentScore += increment;
            if (currentScore >= averageScore) {
                currentScore = averageScore;
                clearInterval(animation);
            }
            scorePercentage.textContent = Math.round(currentScore);
            setProgress(currentScore);
        }, 1000 / frameRate);

        let message = '';
        if (averageScore >= 90) {
            message = "You're a minimalism master! Your lifestyle choices reflect a deep commitment to simplicity and intentional living.";
        } else if (averageScore >= 70) {
            message = "You have strong minimalist tendencies! You understand the value of living with less and making conscious choices.";
        } else if (averageScore >= 50) {
            message = "You're on your way to embracing minimalism! There's potential to simplify further if you choose to.";
        } else {
            message = "You might benefit from exploring minimalism more! Start small and see how living with less could enhance your life.";
        }
        
        resultMessage.textContent = message;

        const userRecommendations = getRecommendations(averageScore);
        recommendations.innerHTML = `
            <h3>${userRecommendations.title}</h3>
            <ul>
                ${userRecommendations.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
    }

    startQuiz.addEventListener('click', () => {
        document.querySelector('.quiz-intro').style.display = 'none';
        quizSection.style.display = 'block';
        displayQuestion();
    });

    prevButton.addEventListener('click', () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            displayQuestion();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            displayQuestion();
        } else {
            showResults();
        }
    });

    retakeQuiz.addEventListener('click', () => {
        currentQuestion = 0;
        userAnswers = new Array(questions.length).fill(null);
        resultContainer.style.display = 'none';
        questionContainer.style.display = 'block';
        document.querySelector('.quiz-intro').style.display = 'block';
        quizSection.style.display = 'none';
    });
});