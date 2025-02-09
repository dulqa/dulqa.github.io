const questions = [
    {
        question: "Какой главный принцип выступлений Михаила Задорнова?",
        answers: [
            "Говорить максимально быстро",
            "Понимание аудитории и адаптация под неё",
            "Использовать только сложные термины",
            "Избегать зрительного контакта"
        ],
        correct: 1
    },
    {
        question: "Как Задорнов работал с голосом во время выступлений?",
        answers: [
            "Говорил монотонно",
            "Использовал только громкий голос",
            "Варьировал темп речи и делал паузы",
            "Шептал весь монолог"
        ],
        correct: 2
    },
    {
        question: "С чего обычно начинал выступление Задорнов?",
        answers: [
            "С длинного вступления",
            "С представления себя",
            "С неожиданного тезиса или вопроса",
            "С критики аудитории"
        ],
        correct: 2
    },
    {
        question: "Какой элемент Задорнов считал ключевым в установлении контакта с аудиторией?",
        answers: [
            "Строгий внешний вид",
            "Искренность и эмоциональность",
            "Громкий голос",
            "Сложные термины"
        ],
        correct: 1
    },
    {
        question: "Как Задорнов работал с паузами в выступлении?",
        answers: [
            "Избегал пауз совсем",
            "Делал случайные паузы",
            "Использовал паузы перед ключевыми фразами",
            "Делал паузы только в конце выступления"
        ],
        correct: 2
    },
    {
        question: "Что характерно для финала выступлений Задорнова?",
        answers: [
            "Внезапное окончание",
            "Длинное заключение",
            "Мощная запоминающаяся фраза",
            "Извинения перед аудиторией"
        ],
        correct: 2
    },
    {
        question: "Какой приём Задорнов использовал для удержания внимания?",
        answers: [
            "Монотонную речь",
            "Чтение по бумажке",
            "Постоянную смену темпа и интонации",
            "Повторение одной и той же мысли"
        ],
        correct: 2
    },
    {
        question: "На чём основывался юмор Задорнова?",
        answers: [
            "На сложных шутках",
            "На бытовых наблюдениях",
            "На цитировании других",
            "На случайных анекдотах"
        ],
        correct: 1
    },
    {
        question: "Как Задорнов готовился к выступлениям?",
        answers: [
            "Импровизировал на месте",
            "Тщательно записывал и репетировал",
            "Копировал других выступающих",
            "Не готовился вообще"
        ],
        correct: 1
    },
    {
        question: "Какой подход использовал Задорнов при работе с критикой?",
        answers: [
            "Игнорировал критику",
            "Спорил с критиками",
            "Использовал критику как материал для шуток",
            "Обижался на критику"
        ],
        correct: 2
    },
    {
        question: "Что Задорнов считал важным в работе с жестами?",
        answers: [
            "Минимум жестов",
            "Естественность и уместность",
            "Максимум жестикуляции",
            "Полное отсутствие жестов"
        ],
        correct: 1
    },
    {
        question: "Как Задорнов относился к ошибкам во время выступления?",
        answers: [
            "Паниковал и извинялся",
            "Игнорировал их",
            "Обыгрывал их с юмором",
            "Прерывал выступление"
        ],
        correct: 2
    },
    {
        question: "Какой главный совет Задорнов давал начинающим ораторам?",
        answers: [
            "Говорить как можно громче",
            "Быть собой и развивать наблюдательность",
            "Копировать успешных ораторов",
            "Учить тексты наизусть"
        ],
        correct: 1
    },
    {
        question: "Что Задорнов считал главным в работе с темпом речи?",
        answers: [
            "Говорить максимально быстро",
            "Говорить медленно",
            "Варьировать темп в зависимости от содержания",
            "Поддерживать постоянный темп"
        ],
        correct: 2
    },
    {
        question: "Как Задорнов работал с языком тела?",
        answers: [
            "Стоял неподвижно",
            "Двигался хаотично",
            "Использовал осознанные, естественные движения",
            "Постоянно ходил по сцене"
        ],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

document.getElementById('startTest').addEventListener('click', openTest);
document.querySelector('.close').addEventListener('click', closeTest);
document.getElementById('nextQuestion').addEventListener('click', showNextQuestion);
document.getElementById('restartTest').addEventListener('click', restartTest);

function openTest() {
    document.getElementById('testModal').style.display = 'block';
    showQuestion();
}

function closeTest() {
    document.getElementById('testModal').style.display = 'none';
    restartTest();
}

function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('questionText').textContent = question.question;
    
    const answersHtml = question.answers.map((answer, index) => `
        <div class="answer-option">
            <input type="radio" name="answer" value="${index}" id="answer${index}">
            <label for="answer${index}">${answer}</label>
        </div>
    `).join('');
    
    document.getElementById('answerOptions').innerHTML = answersHtml;
}

function showNextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert('Пожалуйста, выберите ответ');
        return;
    }

    if (parseInt(selectedAnswer.value) === questions[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('nextQuestion').style.display = 'none';
    document.getElementById('resultContainer').style.display = 'block';
    
    const percentage = (score / questions.length) * 100;
    document.getElementById('score').textContent = 
        `Вы ответили правильно на ${score} из ${questions.length} вопросов (${percentage}%)`;
}

function restartTest() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('questionContainer').style.display = 'block';
    document.getElementById('nextQuestion').style.display = 'block';
    document.getElementById('resultContainer').style.display = 'none';
    showQuestion();
}
