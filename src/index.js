document.addEventListener("DOMContentLoaded", () => {
    const questionUrl = "http://localhost:3000/questions/"
    let txtContent = document.querySelector("#points").textContent 
    let pointsSpan = parseInt(txtContent)
    pointsSpan = 0

    // console.log(typeof txtContent)
    // console.log(typeof pointsSpan)
    
/* get and render categories */
const clickStartGame = () => {
    document.addEventListener('click', (e) => {
        if(e.target.matches(("#start-game"))){
            const questionArray = [42, 43, 44, 45, 46, 47, 48, 49, 50];
            let questionId = questionArray[Math.floor(Math.random()*questionArray.length)]

            fetch(questionUrl + questionId)
                .then(response => response.json())
                .then(question => displayQuestion(question))

            const displayCorrect = () => {
                // set time out
                const correctContainer = document.querySelector(".container")
                correctContainer.textContent = "Correct!"
                correctContainer.style.display = "block"

                // const pointsSpan = document.querySelector("#points")
                pointsSpan = + 5

            }

            const displayIncorrect = () => {
                // set time out
                const incorrectContainer = document.querySelector(".container")
                incorrectContainer.textContent = "INCORRECT!"
                incorrectContainer.style.display = "block"

                // const pointsSpan = document.querySelector("#points")
                pointsSpan = + 0

            }

            const nextQuestion = () => {
            // need a way to indicate next
                // const nextButton = document.createElement("button")
                // nextButton.textContent = "Next Question"
                // const nextClass = document.querySelector("#next")
                // nextClass.append(nextButton)

                const questionArray = [42, 43, 44, 45, 46, 47, 48, 49, 50];
                let questionId = questionArray[Math.floor(Math.random()*questionArray.length)]
                
            // clear out the HTML in the question and answer panels
                const answerPanel = document.querySelector("#answer-panel")
                answerPanel.innerHTML = ''

                const questionPanel = document.querySelector("#question-panel")
                questionPanel.innerHTML = ''

                // nextClass.innerHTML = ''


                
            fetch(questionUrl + questionId)
                .then(response => response.json())
                .then(question => displayQuestion(question))
            }


            const answerClicker = (question) => {
                const answerPanel = document.querySelector("#answer-panel")
                answerPanel.addEventListener("click", e => {
                    const button = e.target
                    if (button.textContent == question.answer){
                        displayCorrect()                       
                        setTimeout(nextQuestion, 2000) //this method will fetch a new question
                    } else {
                        displayIncorrect()
                    }
                })
            }

            //this method will create buttons for each answer 
            const displayAnswers = (question) => {
                const answerPanel = document.querySelector("#answer-panel")

                let totalAnswers = question.incorrect_answers
                totalAnswers.push(question.answer)
                    // TO DO: implement shuffling in total answers

                totalAnswers.forEach(answer => {
                    const answerButton = document.createElement("button") //for each string element in array, create a new button
                    answerButton.textContent = answer// the text content should be an answer
                    answerButton.dataset.id = question.id
                    answerPanel.append(answerButton)  //that will be appended to the answer panel
                })

                answerClicker(question)
            }

            const displayQuestion = (question) => {
                // pointsSpan = 0
                // console.log(typeof pointsSpan)

                const questionPanel = document.querySelector("#question-panel")
                questionPanel.innerHTML = `
                <h2>${question.text}</h2>
                `
                displayAnswers(question)
                
            }


        }    
    
    })
}

/* User should be able to see their score */


clickStartGame()
})