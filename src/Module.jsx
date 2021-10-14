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
            <PracticeModule questions={module.questions} correctCallback={nextCallback}/>
        )
    }

    return (
        <div>
            <h2>
                {module.title}
            </h2>
            {content}
        </div>
    )
}