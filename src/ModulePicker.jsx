import { useState } from "react"
import Module from "./Module"


export default function ModulePicker({mode, modules}) {

    const [module, setModule] = useState(undefined)

    function next() {
        if (module === modules.length - 1) setModule(0)
        else setModule(module + 1)
    }

    function prev() {
        if (module === 0) setModule(modules.length - 1)
        else setModule(module - 1)
    }

    let content
    if (module === undefined) {
        content = (
            <ul>
                {modules.map((mod, index) => {
                    return (
                        <li key={index}>
                            <button onClick={() => setModule(index)}>
                                {mod.title}
                            </button>
                        </li>
                    )
                })}
            </ul>
        )
    } else {
        content = (
            <Module mode={mode} module={modules[module]} nextCallback={next}/>
        )
    }

    return (
        <div>
            <div hidden={module === undefined}>
                <button onClick={() => setModule(undefined)}>
                    Select
                </button>
                <button onClick={prev}>
                    Previous
                </button>

                <button onClick={next}>
                    Next
                </button>
            </div>
            {content}
        </div>
    )
}