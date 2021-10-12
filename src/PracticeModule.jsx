import { useState } from "react";

function pickQuestion(questions) {
    return questions[Math.floor(Math.random() * questions.length)];
}

export default function PracticeModule({questions, correctCallback}) {

    const [correct, setCorrect] = useState(undefined)
    const [question, setQuestion] = useState(pickQuestion(questions))

    function answer(question, answer) {
        setCorrect(question.answer === answer)
    }

    let content
    if (correct === undefined) {
        content = (
            <div>
                <div>
                    <button onClick={() => answer(question, true)}>Yes</button>
                    <button onClick={() => answer(question, false)}>No</button>
                </div>
            </div>
        )
    } else if (correct) {
        content = (
            <div>
                <p>That is correct!</p>
                <button onClick={() => {correctCallback(); setCorrect(undefined)}}>Next</button>
            </div>
        )
    } else {
        content = (
            <div>
                <p>
                    {question.help}
                </p>
                <button onClick={() => {
                    setQuestion(pickQuestion(questions))
                    setCorrect(undefined)
                }}>
                    Retry
                </button>
            </div>
        )
    }
    
    
    return (
        <div>
            <h3>
                {question.question}
            </h3>
            {content}
        </div>
    )
}