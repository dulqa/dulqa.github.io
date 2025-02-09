document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all accordions
            accordionItems.forEach(accItem => {
                accItem.classList.remove('active');
            });
            
            // Open clicked accordion if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    const quizQuestions = [
        {
            question: "Какой главный принцип интервью по методике Гордона?",
            answers: [
                "Глубокая подготовка к беседе",
                "Агрессивные вопросы",
                "Перебивание собеседника",
                "Поверхностные темы"
            ],
            correct: 0
        },
        {
            question: "Что делает Гордон в начале интервью?",
            answers: [
                "Рассказывает о себе",
                "Начинает с интригующего вопроса",
                "Обсуждает погоду",
                "Читает новости"
            ],
            correct: 1
        },
        {
            question: "Какой элемент важен в дикции Гордона?",
            answers: [
                "Быстрая речь",
                "Четкое произношение",
                "Громкий голос",
                "Монотонность"
            ],
            correct: 1
        },
        {
            question: "Как Гордон готовится к интервью?",
            answers: [
                "Импровизирует",
                "Изучает биографию гостя",
                "Не готовится",
                "Только пишет вопросы"
            ],
            correct: 1
        },
        {
            question: "Какой подход использует Гордон при сложных темах?",
            answers: [
                "Избегает их",
                "Задает прямые вопросы",
                "Меняет тему",
                "Шутит"
            ],
            correct: 1
        },
        {
            question: "Что характерно для стиля общения Гордона?",
            answers: [
                "Агрессивность",
                "Уважительность",
                "Фамильярность",
                "Равнодушие"
            ],
            correct: 1
        },
        {
            question: "Как Гордон использует паузы?",
            answers: [
                "Избегает их",
                "Для создания напряжения",
                "Случайно",
                "Все вышеперечисленное"
            ],
            correct: 1
        },
        {
            question: "Что важно в языке тела по методике Гордона?",
            answers: [
                "Открытая поза",
                "Активная жестикуляция",
                "Закрытая поза",
                "Отсутствие движений"
            ],
            correct: 0
        },
        {
            question: "Как Гордон завершает интервью?",
            answers: [
                "Резко",
                "Эмоционально",
                "С подведением итогов",
                "Без заключения"
            ],
            correct: 2
        },
        {
            question: "Какой тип вопросов предпочитает Гордон?",
            answers: [
                "Закрытые",
                "Открытые",
                "Провокационные",
                "Случайные"
            ],
            correct: 1
        },
        {
            question: "Что делает Гордон, если собеседник уходит от ответа?",
            answers: [
                "Меняет тему",
                "Настойчиво повторяет вопрос",
                "Переформулирует вопрос",
                "Игнорирует"
            ],
            correct: 2
        },
        {
            question: "Как Гордон поддерживает динамику беседы?",
            answers: [
                "Частой сменой тем",
                "Логическими переходами",
                "Длинными паузами",
                "Монологами"
            ],
            correct: 1
        },
        {
            question: "Какой прием использует Гордон для раскрытия собеседника?",
            answers: [
                "Провокацию",
                "Активное слушание",
                "Критику",
                "Спор"
            ],
            correct: 1
        },
        {
            question: "Что характерно для структуры интервью Гордона?",
            answers: [
                "Хаотичность",
                "Четкая последовательность",
                "Отсутствие структуры",
                "Спонтанность"
            ],
            correct: 1
        },
        {
            question: "Как Гордон реагирует на эмоциональные ответы?",
            answers: [
                "Игнорирует",
                "Проявляет эмпатию",
                "Меняет тему",
                "Прерывает"
            ],
            correct: 1
        },
        {
            question: "Что является ключевым в технике интервью Гордона?",
            answers: [
                "Развлечение",
                "Глубина беседы",
                "Скорость",
                "Количество вопросов"
            ],
            correct: 1
        }
    ];

    document.getElementById('startQuiz').addEventListener('click', function() {
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

    // Video upload handling
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
            localStorage.setItem('gordonPracticeNotes', notes);
            uploadMessage.textContent = 'Заметки сохранены!';
            setTimeout(() => {
                uploadMessage.textContent = '';
            }, 2000);
        }
    });

    // Load saved notes if they exist
    const savedNotes = localStorage.getItem('gordonPracticeNotes');
    if (savedNotes && practiceNotes) {
        practiceNotes.value = savedNotes;
    }
});
