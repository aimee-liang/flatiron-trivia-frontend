document.addEventListener("DOMContentLoaded", () => {
    const categoryUrl = "http://localhost:3000/categories/"
    const questionUrl = "http://localhost:3000/questions/"

/* get and render categories */
    const getCategories = () => {
        fetch(categoryUrl)
            .then(response => response.json())
            .then(categories => {
                renderCategories(categories)
            })
    }

    const renderCategories = categories => {
        for (const category of categories){
            renderCategory(category)
        }
    }

    const renderCategory = category => {
        const categoryBar = document.querySelector("#category-bar")
        const categorySpan = document.createElement("span")
        categorySpan.dataset.id = `${category.id}`
        categorySpan.textContent = `${category.title}`

        categoryBar.append(categorySpan)
    }

/* User should click on a category. On click, Question and answers will pop up */
    const spanClick = () => {
        document.addEventListener("click", e => {
            if (e.target.matches("span")){
                const categoryId = e.target.dataset.id
                console.log(e)
                fetch(categoryUrl + categoryId)
                    .then(response => response.json())
                    .then(getQuestions)
            }
        })
    }
    
/* get and render questions */
    const getQuestions = () => {
        fetch(questionUrl)
            .then(response => response.json())
            .then(questions => console.log(questions))
    }

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

    getCategories();
    spanClick();
    getQuestions();
})