document.addEventListener("DOMContentLoaded", () => {
    const questionUrl = "http://localhost:3000/questions/"
    const gameUrl = "http://localhost:3000/games/"
    const usersUrl = "http://localhost:3000/users/" //did not get to implement - stretch feature would be to save user name and points to display top scores
        
/* get and render categories */
const clickStartGame = () => {
    document.addEventListener('click', (e) => {
        if(e.target.matches(("#start-game"))){
            const questionArray = [80, 81, 82, 83, 84, 85, 86, 87, 88, 89 ,90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 
            110, 111, 112, 113, 114, 115, 116, 117, 118];
            let questionId = questionArray[Math.floor(Math.random()*questionArray.length)]

            fetch(questionUrl + questionId)
                .then(response => response.json())
                .then(question => displayQuestion(question))

            const displayCorrect = () => {
                // set time out
                const correctContainer = document.querySelector(".container")
                correctContainer.textContent = "CORRECT!"

            }

            const displayIncorrect = () => {
                // set time out
                const incorrectContainer = document.querySelector(".container")
                incorrectContainer.textContent = "INCORRECT!"

                // emptyOutContainer()
                // endGame()
            }

            const nextQuestion = () => {
                
                const questionArray = [80, 81, 82, 83, 84, 85, 86, 87, 88, 89 ,90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 
                    110, 111, 112, 113, 114, 115, 116, 117, 118];                
                let questionId = questionArray[Math.floor(Math.random()*questionArray.length)]
                
            // clear out the HTML in the question and answer panels
                const answerPanel = document.querySelector("#answer-panel")
                answerPanel.innerHTML = ''

                const questionPanel = document.querySelector("#question-panel")
                questionPanel.innerHTML = ''
                
            fetch(questionUrl + questionId)
                .then(response => response.json())
                .then(question => displayQuestion(question))
            }

            const endGame = () => {
                const questionPanel = document.querySelector("#question-panel")
                const h2 = document.createElement("h2")

                h2.textContent = `Thanks for playing! See you next time, loser 🤡.`

                h2.classList.add("h2-question")
                questionPanel.innerHTML = ''
                questionPanel.append(h2)

                const answerPanel = document.querySelector("#answer-panel")
                answerPanel.innerHTML = ''

                // const points = document.querySelector("#points")
                // points.textContent = ''

                const startGameButton = document.querySelector("#start-game")
                startGameButton.textContent = `Start a new game`
            }

            const resetPointsAfterLosing = () => {
                let points = document.querySelector("#points")
                points.textContent = 0
            }


            const answerClicker = (question) => {
                const answerPanel = document.querySelector("#answer-panel")
                answerPanel.addEventListener("click", e => {
                    const button = e.target
                    // console.log(`The answer is ${question.answer}`)
                    // console.log(`These are wrong ${question.incorrect_answers}`)

                    for (let i = 0; i < question.incorrect_answers.length; i++){
                        if (question.incorrect_answers[i] === question.answer){
                            question.incorrect_answers.splice(i, 1)
                        }
                    }
                    // console.log(`These are wrong ${question.incorrect_answers}`)

                    if (button.textContent === question.answer){
                        const answerPanel = document.querySelector("#answer-panel")
                        answerPanel.innerHTML = ''
                        increaseScore()
                        displayCorrect()  
                        setTimeout(nextQuestion, 1000)  //this method will fetch a new question
                    } else if (question.incorrect_answers.includes(button.textContent)){
                        displayIncorrect()
                        endGame()
                        resetPointsAfterLosing()
                        // increaseScore()
                    }
                })
            }

            function shuffle(a) {
                let j, x, i;
                for (i = a.length - 1; i > 0; i--) {
                    j = Math.floor(Math.random() * (i + 1));
                    x = a[i];
                    a[i] = a[j];
                    a[j] = x;
                }
                return a;
            }
            
            //this method will create buttons for each answer 
            const displayAnswers = (question) => {
                const answerPanel = document.querySelector("#answer-panel")

                let totalAnswers = question.incorrect_answers
                totalAnswers.push(question.answer)
                shuffle(totalAnswers)
                answerPanel.innerHTML = ''

                totalAnswers.forEach(answer => {
                    const answerButton = document.createElement("button") //for each string element in array, create a new button
                    answerButton.textContent = answer// the text content should be an answer
                    answerButton.dataset.id = question.id
                    answerButton.classList.add("answerBtn")
                    answerPanel.append(answerButton)  //that will be appended to the answer panel
                })
                answerClicker(question)
            }

            
            const displayQuestion = (question) => {                
                const questionPanel = document.querySelector("#question-panel")

                const h2 = document.createElement("h2")
                h2.textContent = `${question.text}`
                h2.classList.add("h2-question")
                questionPanel.innerHTML = ''
                questionPanel.append(h2)

                displayAnswers(question)
                // emptyOutContainer()                     
            }
            
            const increaseScore = () => {
                let points = document.querySelector("#points")
                let txtContent = points.textContent
                
                let pointsSpan = parseInt(txtContent)
                
                const options = {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json",
                        "accept": "application/json"
                    },
                    body: JSON.stringify({score: pointsSpan += 5})
                }
                
/* User should be able to see their score */
                fetch(gameUrl + 8, options)
                .then(response => response.json())
                .then(data => {
                    points.textContent = data.score
                })
            }
        }    
    })
}


clickStartGame()
})