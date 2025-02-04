import { Link } from "react-router-dom";
import "./assets/main.css";
import { useEffect } from "react";

const URLS = {
    nameUrl: [
        "Matrix_Rain_Experiments",
        "HTML5_Canvas_CRASH_COURSE_for_Beginners",
    ],
    nameUrlText: [
        "Matrix Rain Experiments",
        "HTML5 Canvas CRASH COURSE for Beginners",
    ],
};

const Code = () => {
    useEffect(() => {
        document.title = "Code . PXH2910";
    }, []);

    return (
        <>
            <div className="Code">
                {/* <div
                    className="item"
                    style={{
                        backgroundImage:
                            "url(/assets/imgs/codepen/HTML5_Canvas_CRASH_COURSE_for_Beginners.gif)",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <Link
                        to="/assets/html/codepen/HTML5_Canvas_CRASH_COURSE_for_Beginners/index.html"
                        target="_blank"
                    >
                        HTML5 Canvas CRASH COURSE for Beginners
                    </Link>
                </div> */}

                {URLS.nameUrl.map((item, index) => (
                    <div
                        key={`${item}-${index}`}
                        className="item"
                        style={{
                            backgroundImage: `url(/assets/imgs/codepen/${item}.gif)`,
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <Link
                            to={`/assets/html/codepen/${item}/index.html`}
                            target="_blank"
                        >
                            {URLS.nameUrlText[index]}
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Code;
