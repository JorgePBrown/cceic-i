import PracticeModule from "./PracticeModule"

export default function Module({mode, module, nextCallback}) {

    let content
    if (mode === "learn") {
        content = (
            <div>
                {module.info.map((i, index) => <p key={index}>{i}</p>)}
            </div>
        )
    } else {
        content = (
            <PracticeModule key={module.title} questions={module.questions} correctCallback={nextCallback}/>
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