import "./assets/main.css"
import { DATA_HTML_CSS_JS } from "../../common/DataCommon"
import parse from "html-react-parser"
import { Link } from "react-router-dom"

const datas = DATA_HTML_CSS_JS

const ImagesGame = () => {

    // console.log(datas);

    return (

        <div className="ImagesGame">

            {datas && datas.map((data) =>
            (
                <div key={data.title} className="box">
                    <div className="sub-box">
                        <img src={data.img} alt="Logo Game" />
                        <Link to={"/Games"} state={{ dataGameplay: data.live, title: data.title }}>
                            <div className="overlayer-v1">
                                <div className="overlayer-v2">
                                    <div className="btn-playgame">Play Game</div>
                                    <div className="tutorial">
                                        {parse(data.tutorial)}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="title">{data.title}</div>
                    <div className="platform">{data.platform}</div>
                </div>
            )
            )}

        </div>

    )

}


export default ImagesGame
