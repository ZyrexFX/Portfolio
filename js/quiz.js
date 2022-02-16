const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true;
let score = 0;
let questionsCounter = 0;
let availableQuestions = []

let questions = [
    {
        question: '日',
        choice1: 'ニチ, ジツ || ひ, -び, -か',
        choice2: 'ゲツ、 ガツ || つき',
        choice3: 'カ || ひ、 -び、 ほ-',
        choice4: 'ネン || とし',
        answer: 1,
    },
    {
        question: '一',
        choice1: 'ダイ、 タイ || おお(きい)',
        choice2: 'イチ || ひと(つ)',
        choice3: 'ジュウ || とお、と',
        choice4: 'コク || くに',
        answer: 2,
    },
    {
        question: '国',
        choice1: 'チョウ || なが(い)、おさ',
        choice2: 'ホン || もと',
        choice3: 'コク || くに',
        choice4: 'ゲツ、 ガツ || つき',
        answer: 3,
    },
    {
        question: '人',
        choice1: 'ジ || とき、 -どき',
        choice2: 'ゴ || いつ(つ)',
        choice3: 'カ || ひ、 -び、 ほ-',
        choice4: 'ジン、 ニン || ひと',
        answer: 4,
    },
    {
        question: '年',
        choice1: 'ネン || とし',
        choice2: 'ゴ || うま',
        choice3: 'コク || くに',
        choice4: 'フ || ちち、 とう',
        answer: 1,
    },
    {
        question: '右',
        choice1: 'サ、 シャ || ひだり',
        choice2: 'ウ、 ユウ || みぎ',
        choice3: 'ユウ || とも',
        choice4: 'テン || あまつ',
        answer: 2,
    },
    {
        question: '左',
        choice1: 'ユウ || とも',
        choice2: 'ウ、 ユウ || みぎ',
        choice3: 'サ、 シャ || ひだり',
        choice4: 'テン || あまつ',
        answer: 3,
    },
    {
        question: '友',
        choice1: 'サ、 シャ || ひだり',
        choice2: 'ウ、 ユウ || みぎ',
        choice3: 'テン || あまつ',
        choice4: 'ユウ || とも',
        answer: 4,
    },
    {
        question: '月',
        choice1: 'ゲツ、 ガツ || つき',
        choice2: 'ニチ, ジツ || ひ, -び, -か',
        choice3: 'カ || ひ、 -び、 ほ-',
        choice4: 'シャ || くるま',
        answer: 1,
    },
    {
        question: '火',
        choice1: 'シャ || くるま',
        choice2: 'カ || ひ、 -び、 ほ-',
        choice3: 'ゲツ、 ガツ || つき',
        choice4: 'ニチ, ジツ || ひ, -び, -か',
        answer: 2,
    }
]

// {
//     question: '日',
//     choice1: 'ニチ, ジツ || ひ, -び, -か',
//     choice2: 'ゲツ、 ガツ || つき',
//     choice3: 'ホン || もと',
//     choice4: 'ネン || とし',
//     answer: 1,
// },

const SCORE_POINTS = 10
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
  
        }, 500
        )
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()