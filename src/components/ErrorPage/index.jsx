import "./assets/main.css"
import { useEffect } from "react";
import { useRouteError } from "react-router-dom";
import Menu from "../Menu";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    useEffect(() => {
        document.title = "Error . PXH2910"
    }, [])

    return (
        <>
            <div>
                <Menu />
            </div>
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </>
    );
}
