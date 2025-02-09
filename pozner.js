document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        
        header.addEventListener('click', () => {
            // Close all other accordions
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current accordion
            item.classList.toggle('active');
        });
    });
    
    const quizQuestions = [
        {
            question: "Какой главный принцип интервью по методике Познера?",
            answers: [
                "Глубокая подготовка",
                "Эмоциональность",
                "Агрессивный стиль",
                "Развлекательный формат"
            ],
            correct: 0
        },
        {
            question: "Что характеризует стиль речи Познера?",
            answers: [
                "Быстрая речь",
                "Спокойствие и уверенность",
                "Громкий голос",
                "Частые шутки"
            ],
            correct: 1
        },
        {
            question: "Как Познер готовится к интервью?",
            answers: [
                "Не готовится вообще",
                "Только пишет вопросы",
                "Детально изучает тему и собеседника",
                "Импровизирует"
            ],
            correct: 2
        },
        {
            question: "В чем особенность аргументации Познера?",
            answers: [
                "Эмоциональность",
                "Рациональность и логика",
                "Давление на собеседника",
                "Уход от темы"
            ],
            correct: 1
        },
        {
            question: "Какой элемент важен в методике Познера?",
            answers: [
                "Громкий голос",
                "Жесткая критика",
                "Активное слушание",
                "Перебивание"
            ],
            correct: 2
        },
        {
            question: "Как Познер структурирует интервью?",
            answers: [
                "Хаотично",
                "По заранее написанному сценарию",
                "Гибко, с учетом хода беседы",
                "Без структуры"
            ],
            correct: 2
        },
        {
            question: "Что отличает манеру речи Познера?",
            answers: [
                "Чёткая артикуляция",
                "Быстрый темп",
                "Громкость",
                "Монотонность"
            ],
            correct: 0
        },
        {
            question: "Как Познер работает с провокационными темами?",
            answers: [
                "Избегает их",
                "Подходит нейтрально",
                "Агрессивно настаивает",
                "Меняет тему"
            ],
            correct: 1
        },
        {
            question: "Что характерно для языка тела Познера?",
            answers: [
                "Активная жестикуляция",
                "Сдержанность и спокойствие",
                "Закрытые позы",
                "Нервные движения"
            ],
            correct: 1
        },
        {
            question: "Как Познер завершает интервью?",
            answers: [
                "Резко",
                "С обобщением",
                "Без заключения",
                "Шуткой"
            ],
            correct: 1
        },
        {
            question: "Какое качество Познер считает важным для интервьюера?",
            answers: [
                "Красноречие",
                "Эрудированность",
                "Харизма",
                "Внешность"
            ],
            correct: 1
        },
        {
            question: "Как Познер реагирует на уклончивые ответы?",
            answers: [
                "Игнорирует",
                "Уточняет вопрос",
                "Настаивает агрессивно",
                "Меняет тему"
            ],
            correct: 1
        },
        {
            question: "Что важно в начале интервью по Познеру?",
            answers: [
                "Установление контакта",
                "Провокация",
                "Монолог",
                "Критика"
            ],
            correct: 0
        },
        {
            question: "Как Познер использует паузы?",
            answers: [
                "Не использует",
                "Стратегически",
                "Случайно",
                "Избегает их"
            ],
            correct: 1
        },
        {
            question: "Что характерно для вопросов Познера?",
            answers: [
                "Случайность",
                "Краткость и точность",
                "Размытость",
                "Агрессивность"
            ],
            correct: 1
        },
        {
            question: "Как Познер поддерживает динамику беседы?",
            answers: [
                "Частыми перебиваниями",
                "Логическими переходами",
                "Громкостью",
                "Жестами"
            ],
            correct: 1
        }
    ];
    
    document.getElementById('startQuiz')?.addEventListener('click', function() {
        let currentQuestion = 0;
        let score = 0;
        
        const quizContainer = document.getElementById('quizContainer');
        const questionEl = document.getElementById('question');
        const answersEl = document.getElementById('answers');
        const resultEl = document.getElementById('result');
        
        function showQuestion(questionIndex) {
            const question = quizQuestions[questionIndex];
            questionEl.textContent = question.question;
            answersEl.innerHTML = '';
            
            question.answers.forEach((answer, index) => {
                const button = document.createElement('button');
                button.className = 'answer-button';
                button.textContent = answer;
                
                button.addEventListener('click', () => {
                    const buttons = answersEl.getElementsByClassName('answer-button');
                    Array.from(buttons).forEach(btn => {
                        btn.disabled = true;
                    });
                    
                    if (index === question.correct) {
                        button.classList.add('correct');
                        score++;
                    } else {
                        button.classList.add('wrong');
                        buttons[question.correct].classList.add('correct');
                    }
                    
                    setTimeout(() => {
                        if (currentQuestion < quizQuestions.length - 1) {
                            currentQuestion++;
                            showQuestion(currentQuestion);
                        } else {
                            showResult();
                        }
                    }, 1500);
                });
                
                answersEl.appendChild(button);
            });
        }
        
        function showResult() {
            questionEl.style.display = 'none';
            answersEl.style.display = 'none';
            resultEl.textContent = `Ваш результат: ${score} из ${quizQuestions.length}`;
            
            setTimeout(() => {
                quizContainer.style.display = 'none';
                document.getElementById('startQuiz').style.display = 'block';
            }, 3000);
        }
        
        document.getElementById('startQuiz').style.display = 'none';
        quizContainer.style.display = 'block';
        resultEl.textContent = '';
        questionEl.style.display = 'block';
        answersEl.style.display = 'grid';
        showQuestion(currentQuestion);
    });

    // Add video upload handling
    const videoUpload = document.getElementById('videoUpload');
    const videoPreview = document.getElementById('videoPreview');
    const uploadMessage = document.getElementById('uploadMessage');
    const practiceNotes = document.getElementById('practiceNotes');
    const saveNotes = document.getElementById('saveNotes');

    videoUpload?.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const videoURL = URL.createObjectURL(file);
            videoPreview.src = videoURL;
            videoPreview.style.display = 'block';
            uploadMessage.textContent = 'Видео загружено успешно!';
        }
    });

    saveNotes?.addEventListener('click', function() {
        const notes = practiceNotes.value;
        if (notes) {
            localStorage.setItem('practiceNotes', notes);
            uploadMessage.textContent = 'Заметки сохранены!';
            setTimeout(() => {
                uploadMessage.textContent = '';
            }, 2000);
        }
    });

    // Load saved notes if they exist
    const savedNotes = localStorage.getItem('practiceNotes');
    if (savedNotes && practiceNotes) {
        practiceNotes.value = savedNotes;
    }
});
