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
            {module.ref ? (
                <div className="module-references">
                    <h3>References</h3>
                    {module.ref.map((ref, i) => {
                        return (
                            <div className="ref" key={i}>
                                <p>{ref.text}</p>
                                <a href={ref.url}>{ref.url}</a>
                            </div>
                        )
                    })}
                </div>
            ) : undefined}
        </div>
    )
}