export default function Info({info, callback}) {

    return (
        <div>
            {info}
            <button onClick={callback}>
                Got it!
            </button>
        </div>
    )
}