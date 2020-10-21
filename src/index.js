document.addEventListener("DOMContentLoaded", () => {
    
    const questionUrl = "http://localhost:3000/questions/"
    // const questionArray = [158,159, 160, 161]
    // let questionId = questionArray[Math.floor(Math.random()*questionArray.length)]
/* get and render categories */
const clickStartGame = () => {
    document.addEventListener('click', (e) => {
        if(e.target.matches(("#start-game"))){
            const questionArray = [162,163, 164, 165, 166, 167, 168]
            let questionId = questionArray[Math.floor(Math.random()*questionArray.length)]
            console.log(e.target)
            fetch(questionUrl + questionId)
            .then(response => response.json())
            .then(question => console.log(question)
            )
        }
        
        // console.log(e.target)
    
    
    })
}
    

    // const renderQuestions = questions => {
    //     // console.log(questions[3].text)
    //     for (const question of questions){
    //         // renderText(question)
    //     const questionPanel = document.querySelector("#question-panel")
    //     const h4 = document.createElement('h4')
    //     h4.dataset.questionId = `${question.id}`
    //     h4.textContent = `${question.text}`
    //     questionPanel.append(h4)
    //     }
    // }

    // const clickText = () => {
    //     document.addEventListener('click', (e) => {
    //         if(e.target.matches('h4')){
    //             const questionId = e.target.dataset.questionId
    //             fetch(questionUrl + questionId)
    //             .then(response => response.json())
    //             .then(text => console.log(text))
    //         }
    //     // const textInfo = (text) => {
            
    //     // }


    //     })
    // }

 

    // const renderText = question => {
    //     const questionPanel = document.querySelector("#question-panel")
    //     // console.log(questionPanel)
    //     const h2 = document.createElement('h2')
    //     h2.textContent = `${question.text}`
    //     console.log(h2)

        // const questionDiv = document.createElement("span")
        // questionDiv.dataset.id = `${question.id}`
        // questionDiv.textContent = `${question.title}`
        // console.log(question)
        // categoryBar.append(questionDiv)
    // }

/* User should click on a category. On click, Question and answers will pop up */
    // const spanClick = () => {
    //     document.addEventListener("click", e => {
    //         if (e.target.matches("span")){
    //             const categoryId = e.target.dataset.id
    //             console.log(e)
    //             fetch(categoryUrl + categoryId)
    //                 .then(response => response.json())
    //                 .then(getQuestions)
    //         }
    //     })
    // }
    
/* get and render questions */
    // const getQuestions = () => {
    //     fetch(questionUrl)
    //         .then(response => response.json())
    //         .then(questions => console.log(questions))
    // }

    


/* User can click next button to go on to the next question */

/* User should be able to see their score */

   
clickStartGame()
})