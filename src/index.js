document.addEventListener("DOMContentLoaded", () => {
    
    const questionUrl = "http://localhost:3000/questions/"

/* get and render categories */
    const getQuestions = () => {
        fetch(questionUrl)
            .then(response => response.json())
            .then(questions => {
                renderQuestions(questions)
            })
    }

    const renderQuestions = questions => {
        // console.log(questions[3].text)
        for (const question of questions){
            // renderText(question)
        const questionPanel = document.querySelector("#question-panel")
        const h4 = document.createElement('h4')
        h4.dataset.questionId = `${question.id}`
        h4.textContent = `${question.text}`
        questionPanel.append(h4)
        }
    }

    const clickText = () => {
        document.addEventListener('click', (e) => {
            if(e.target.matches('h4')){
                const questionId = e.target.dataset.questionId
                fetch(questionUrl + questionId)
                .then(response => response.json())
                .then(textInfo)
            }
        const textInfo = () => {
            

        }


        })
    }

 

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

    // const renderQuestions = questions => {
    //     const questionPanel = document.querySelector("#question-panel")
    //     for (const question of questions){
    //         renderQuestion(question, questionPanel)
    //     }
    // }   
    
    // const renderQuestion = question => {
        
        // for (let i )
        
        // const questionDisplay = document.createElement("h")
        // questionDiv.classList.add("question-div")
        // questionDiv.textContent = `
        // ${question.question}
        // `
        // console.log(questionDiv)
        // console.log(question)
    // }


/* User can click next button to go on to the next question */

/* User should be able to see their score */

   
    clickText()
    getQuestions();
})