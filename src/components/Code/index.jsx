import { Link } from "react-router-dom";
import "./assets/main.css";
import { useEffect } from "react";

const Code = () => {
    useEffect(() => {
        document.title = "Code . PXH2910";
    }, []);

    return (
        <>
            <div className="Code">
                <div className="item">
                    <Link
                        to="/assets/html/codepen/HTML5_Canvas_CRASH_COURSE_for_Beginners/index.html"
                        target="_blank"
                        // onClick={(e) => {
                        //     e.preventDefault();
                        //     // window.open(
                        //     //     "https://codesandbox.io/p/sandbox/html5-canvas-crash-course-for-beginners-kmxw2j",
                        //     //     "PopupWindow",
                        //     //     "width=100, height=100, left=0, top=0"
                        //     // );
                        //     window.open(
                        //         "https://codesandbox.io/p/sandbox/html5-canvas-crash-course-for-beginners-kmxw2j",
                        //         "PopupWindow",
                        //         "width=" +
                        //             window.screen.width * 0.6 +
                        //             ",height=" +
                        //             window.screen.height * 0.6 +
                        //             ",left=" +
                        //             (window.screen.width -
                        //                 window.screen.width * 0.6) /
                        //                 2 +
                        //             ",top=" +
                        //             (window.screen.height -
                        //                 window.screen.height * 0.6) /
                        //                 2
                        //     );
                        // }}
                    >
                        HTML5 Canvas CRASH COURSE for Beginners
                    </Link>
                </div>
                <div className="item">2</div>
                <div className="item">3</div>
                <div className="item">4</div>
                <div className="item">5</div>

                <div className="item">6</div>
                <div className="item">7</div>
                <div className="item">8</div>
                <div className="item">9</div>
                <div className="item">10</div>

                <div className="item">11</div>
                <div className="item">12</div>
                <div className="item">13</div>
                <div className="item">14</div>
                <div className="item">15</div>

                <div className="item">16</div>
                <div className="item">17</div>
                <div className="item">18</div>
                <div className="item">19</div>
                <div className="item">20</div>
            </div>
        </>
    );
};

export default Code;
