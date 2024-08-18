import "./assets/main.css"
import { DATA_HTML_CSS_JS } from "../../common/DataCommon"
import parse from "html-react-parser"
import { Link } from "react-router-dom"
import About from "../../components/About"
import { useEffect, useState } from "react"

const datas = DATA_HTML_CSS_JS
const maxLen = datas.length

let showItems = 5

const ImagesGame = () => {

    // console.log(datas);

    const [listData, setListData] = useState([])
    const [page, setPage] = useState(1)
    const [indexPage, setIndexPage] = useState(0)

    useEffect(() => {
        setListData([...listData, ...datas.slice(page === 1 ? 0 : showItems * indexPage, showItems * page)]);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, indexPage])

    const onLoadMore = () => {
        setPage(page + 1)
        setIndexPage(indexPage + 1)
    }

    // console.log("PXH: listData = ", listData, " , page = ", page, " , indexPage = ", indexPage);

    return (

        <>
            <About />

            <div className="ImagesGame">

                {listData && listData.map((data, index) =>
                (
                    <div key={index + data.title} className="box">
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

            {showItems * page < maxLen && <div className="btn-loading" content="TẢI THÊM GAMES" onClick={() => onLoadMore()}></div>}
        </>

    )

}


export default ImagesGame
