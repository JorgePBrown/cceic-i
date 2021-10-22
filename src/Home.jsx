import { useState } from "react"
import ModulePicker from "./ModulePicker"

export default function Home({modules}) {
    const [mode, setMode] = useState(undefined)

    let content
    if (mode === undefined) {
        content = (
            <div className="mode picker">
                <button onClick={() => setMode("learn")}>
                    Learn
                </button>
                <button onClick={() => setMode("practice")}>
                    Practice
                </button>
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
            <button className="home button" hidden={mode === undefined} onClick={() => setMode(undefined)}>
                Home
            </button>
            {content}
        </div>
    )
}