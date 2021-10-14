export default function LearningModule({info}) {
    return (
        <div>
            {info.map((i, index) => {
                if (i.type === "text") return <p key={index}>{i.text}</p>
                if (i.type === "video/youtube") return (
                    <iframe key={index} width="560" height="315" src={i.link} title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                )
                if(i.type === "text/list") return (
                    <ul key={index}>
                        {i.items.map((i2, index2) => 
                            <li key={index2}>
                                {i2}
                            </li>
                        )}
                    </ul>
                )
                return undefined
            })}
        </div>
    )
}