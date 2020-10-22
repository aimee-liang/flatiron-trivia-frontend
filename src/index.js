document.addEventListener("DOMContentLoaded", () => {
    const questionUrl = "http://localhost:3000/questions/"
    const gameUrl = "http://localhost:3000/games/"
        
/* get and render categories */
const clickStartGame = () => {
    document.addEventListener('click', (e) => {
        if(e.target.matches(("#start-game"))){
            const questionArray = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70];
            let questionId = questionArray[Math.floor(Math.random()*questionArray.length)]

            fetch(questionUrl + questionId)
                .then(response => response.json())
                .then(question => displayQuestion(question))

            const displayCorrect = () => {
                // set time out
                const correctContainer = document.querySelector(".container")
                correctContainer.textContent = "Correct!"
                // correctContainer.style.display = "block"
            }

            const displayIncorrect = () => {
                // set time out
                const incorrectContainer = document.querySelector(".container")
                incorrectContainer.textContent = "INCORRECT!"
                // incorrectContainer.style.display = "block"
            }

            const nextQuestion = () => {
            // need a way to indicate next
                
                const questionArray = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70];
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

            const answerClicker = (question) => {
                const answerPanel = document.querySelector("#answer-panel")
                answerPanel.addEventListener("click", e => {
                    const button = e.target
                    if (button.textContent === question.answer){
                        const answerPanel = document.querySelector("#answer-panel")
                answerPanel.innerHTML = ''
                        displayCorrect()                       
                        setTimeout(nextQuestion, 1000)  //this method will fetch a new question
                        increaseScore()
                    } else {
                        displayIncorrect()
                        setTimeout(nextQuestion, 1000)
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
                    // TO DO: implement shuffling in total answers
                totalAnswers.forEach(answer => {
                    const answerButton = document.createElement("button") //for each string element in array, create a new button
                    answerButton.textContent = answer// the text content should be an answer
                    answerButton.dataset.id = question.id
                    answerPanel.append(answerButton)  //that will be appended to the answer panel
                })
                answerClicker(question)
            }
            
            const countDown = () => {
                
                // let interval = setInterval(function(){
                  let timer = document.getElementById('count').innerHTML=timer;
                  timer--;
                //   console.log(timer)
                if (timer === 0){
                    // clearInterval(interval);
                    document.getElementById('count').innerHTML='Done';
                    // or...
                    alert("You're out of time!");
                  }
                // }, 1000);

            }
            

            const displayQuestion = (question) => {                
                const questionPanel = document.querySelector("#question-panel")
                // questionPanel.innerHTML = `<h2>${question.text}</h2>`
                const h2 = document.createElement("h2")
                h2.textContent = `${question.text}`
                h2.classList.add("h2-question")
                questionPanel.append(h2)
                displayAnswers(question)
                countDown()
            }
            
            const increaseScore = () => {
                let points = document.querySelector("#points")
                let txtContent = points.textContent
                
                const pointsSpan = parseInt(txtContent)
                
                const options = {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json",
                        "accept": "application/json"
                    },
                    body: JSON.stringify({score: pointsSpan + 5})
                }

                fetch(gameUrl + 7, options)
                .then(response => response.json())
                .then(data => {
                    points.textContent = data.score
                })

            }

            


        }    
    
    })
}

/* User should be able to see their score */


clickStartGame()
})