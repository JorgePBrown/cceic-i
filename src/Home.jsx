import { useState } from "react"
import ModulePicker from "./ModulePicker"
import refs from "./references.json"

export default function Home({modules}) {
    const [mode, setMode] = useState(undefined)

    let content
    if (mode === undefined) {
        content = (
            <div>
                <button onClick={() => setMode("ref")}>
                    References
                </button>
                <div>
                    <button onClick={() => setMode("learn")}>
                        Learn
                    </button>
                    <button onClick={() => setMode("practice")}>
                        Practice
                    </button>
                </div>
            </div>
        )
    } else if (mode === "ref") {
        content = (
            <div>
                {refs.map((ref, i) => {
                    return (
                        <div className="ref" key={i}>
                            <p>{ref.text}</p>
                            <a href={ref.url}>{ref.url}</a>
                        </div>
                    )
                })}
            </div>
        )
    } else {
        content = (
            <div>
                <ModulePicker mode={mode} modules={modules}/>
            </div>
        )
    }

    return (
        <div className="home">
            <h1>
                Active Listening
            </h1>
            <button hidden={mode === undefined} onClick={() => setMode(undefined)}>
                Home
            </button>
            {content}
        </div>
    )
}