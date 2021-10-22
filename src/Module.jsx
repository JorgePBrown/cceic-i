import LearningModule from "./LearningModule"
import PracticeModule from "./PracticeModule"

export default function Module({mode, module, nextCallback}) {

    let content
    if (mode === "learn") {
        content = (
            <LearningModule info={module.info} nextCallback={nextCallback}/>
        )
    } else {
        content = (
            <PracticeModule key={module.title} questions={module.questions} correctCallback={nextCallback}/>
        )
    }

    return (
        <div className="module">
            <h2 className="title">
                {module.title}
            </h2>
            {content}
        </div>
    )
}