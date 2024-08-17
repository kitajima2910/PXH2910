import { useEffect } from "react"

const Games = () => {

    document.title = "Games . PXH2910"

    return (
        <>
            <div>Games Nè!</div>
            <iframe src="./html/Platformer/index.html" frameBorder={0} width={1024} height={768}></iframe>
        </>
    )
}

export default Games
