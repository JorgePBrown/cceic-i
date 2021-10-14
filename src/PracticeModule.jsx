import { useState } from "react";

export default function PracticeModule({questions, correctCallback}) {

    const [unanswered, setUnanswered] = useState([...Array(questions.length).keys()])
    const [correct, setCorrect] = useState(undefined)
    const [index, setIndex] = useState(0)

    function answer(index, answer) {
        const question = questions[unanswered[index]]
        const correct = question.answer === answer
        if (correct) {
            const newUnanswered = [...unanswered]
            newUnanswered.splice(index, 1)
            setUnanswered(newUnanswered)
        }
        setCorrect(correct)
    }
    function reset() {
        setCorrect(undefined)
        setIndex(pickQuestion(unanswered))
    }
    function pickQuestion(unanswered) {
        if (unanswered.length === 0) return undefined
        else return Math.floor(Math.random() * unanswered.length)
    }

    if (unanswered.length === 0) {
        return (
            <div>
                <p>{`Congratulations! You have answered all questions of this module correctly!`}</p>
                <button onClick={correctCallback}>Next</button>
            </div>
        )
    }

    const question = questions[unanswered[index]]

    let content
    if (correct === undefined) {
        content = (
            <div>
                <div>
                    <button onClick={() => answer(index, true)}>Yes</button>
                    <button onClick={() => answer(index, false)}>No</button>
                </div>
            </div>
        )
    } else if (correct) {
        content = (
            <div>
                <p>That is correct!</p>
                <button onClick={reset}>Next</button>
            </div>
        )
    } else {
        content = (
            <div>
                <p>
                    {question.help}
                </p>
                <button onClick={reset}>
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