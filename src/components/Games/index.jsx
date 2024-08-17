import { useEffect } from "react"
import ImagesGame from "../../widgets/ImagesGame"
import { useLocation } from "react-router-dom"

const Games = () => {

    const localtion = useLocation()

    useEffect(() => {
        if (localtion && localtion.state && localtion.state.title) {
            document.title = `${localtion.state.title} . PXH2910`
        } else {
            document.title = "Games . PXH2910"
        }
    }, [localtion])

    return (
        <div className="Games" style={localtion && localtion.state && localtion.state.dataGameplay ? { display: "flex", justifyContent: "center" } : {}}>
            {
                localtion && localtion.state && localtion.state.dataGameplay ?
                    <iframe className="gameplay" title="gameplay" src={localtion.state.dataGameplay} frameBorder={0} width={1024} height={768}></iframe> :
                    <ImagesGame />
            }
        </div>
    )
}

export default Games
